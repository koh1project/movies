import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { MovieCardType } from "../component/MovieCard/MovieCard";
import { convertMovieResponseToCard } from "../component/MovieCard/utils";

import { FetchPopularMoviesResponse, fetchPopularMovies } from "@/app/lib/http/movie/movie.service";

type Params = {
  initialCards: MovieCardType[];
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

  const [cards, setCards] = useState<MovieCardType[]>(initialCards);
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
      setRequestState({ state: REQUEST_STATE_TYPES.SUCCESS });
    } catch (error) {
      setRequestState({
        state: REQUEST_STATE_TYPES.ERROR,
        error: error instanceof Error ? error : new Error(String(error)),
      });
    }
  }, []);

  useEffect(() => {
    // The 1st page is set by Server Side Rendering
    if (currentPage === 1) {
      return;
    }

    fetchNextMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (requestState.state === REQUEST_STATE_TYPES.LOADING) {
      return;
    }

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
