import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { CardType } from "../component/Card/Card";
import { convertMovieResponseToCard } from "../component/utils";

import { FetchPopularMoviesResponse, fetchPopularMovies } from "@/app/lib/http/movie/movie.service";

type Params = {
  initialCards: CardType[];
  page: number;
};

export const REQUEST_STATE_TYPES = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  NOT_STARTED: "not_started",
} as const;

export type RequestState =
  | {
      state: typeof REQUEST_STATE_TYPES.SUCCESS;
    }
  | {
      state: typeof REQUEST_STATE_TYPES.LOADING;
    }
  | {
      state: typeof REQUEST_STATE_TYPES.ERROR;
      error: Error;
    }
  | {
      state: typeof REQUEST_STATE_TYPES.NOT_STARTED;
    };

export const useMovies = ({ initialCards, page }: Params) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [cards, setCards] = useState<CardType[]>(initialCards);
  const [currentPage, setCurrentPage] = useState<number>(page);

  const [requestState, setRequestState] = useState<RequestState>({
    state: REQUEST_STATE_TYPES.NOT_STARTED,
  });

  const fetchNextMovies = useCallback(async (page: number) => {
    setRequestState({ state: REQUEST_STATE_TYPES.LOADING });

    try {
      const movies = /** Mock a long time loading*/ await new Promise<FetchPopularMoviesResponse>(
        (resolve) => {
          setTimeout(async () => {
            const movies = await fetchPopularMovies({ page: String(page) });
            resolve(movies);
          }, 1000);
        },
      );
      const additionalCards = convertMovieResponseToCard(movies.results);

      setCards((prev) => [...prev, ...additionalCards]);
    } catch (error) {
      setRequestState({
        state: REQUEST_STATE_TYPES.ERROR,
        error: error instanceof Error ? error : new Error(String(error)),
      });
    }
  }, []);

  useEffect(() => {
    // THe 1st page is set by Server Side Rendering
    if (currentPage === 1) {
      return;
    }

    fetchNextMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (inView) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  return {
    cards,
    ref,
    requestState,
  };
};
