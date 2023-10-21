import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { CardType } from "../component/Card/Card";
import { convertMovieResponseToCard } from "../component/utils";

import { FetchPopularMoviesResponse, fetchPopularMovies } from "@/app/lib/http/movie/movie.service";

type Params = {
  initialCards: CardType[];
  page: number;
};

export const useMovies = ({ initialCards, page }: Params) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [cards, setCards] = useState<CardType[]>(initialCards);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNextMovies = useCallback(async (page: number) => {
    setLoading(true);

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
      console.log("error: ", error);
      throw error;
    } finally {
      setLoading(false);
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
    loading,
  };
};
