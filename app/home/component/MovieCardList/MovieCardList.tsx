"use client";

import { Stack, initializeIcons } from "@fluentui/react";
import React, { useCallback, useEffect } from "react";

import { MovieCardType, MovieCard } from "../MovieCard/MovieCard";
import { convertMovieResponseToCard } from "../MovieCard/MovieCard.utils";

import { fetchPopularMovies } from "@/app/lib/http/movie/movie.service";

export type MovieCardListProps = {
  movieCards: MovieCardType[];
  currentPage: number;
};

export const MovieCardList: React.FC<MovieCardListProps> = ({
  movieCards,
  currentPage: pageNumber,
}) => {
  initializeIcons();

  const [cards, setCards] = React.useState<MovieCardType[]>(movieCards);
  const [currentPage, setCurrentPage] = React.useState<number>(pageNumber);

  // Client fetch test -----------
  const fetchOnClient_DEVELOP = useCallback(async () => {
    const nextPage = currentPage + 1;
    const movies = await fetchPopularMovies({ page: String(nextPage) });
    const additionalCards = convertMovieResponseToCard(movies.results);

    setCards([...cards, ...additionalCards]);
    setCurrentPage(nextPage);
  }, []);

  useEffect(() => {
    setTimeout(fetchOnClient_DEVELOP, 3000);
  }, []);
  // Client fetch test -----------

  return (
    <Stack
      horizontal
      wrap
      horizontalAlign="start"
      tokens={{
        childrenGap: 20,
      }}
    >
      {cards.map((card) => (
        <MovieCard
          key={card.id}
          title={card.title}
          imagePath={card.imagePath}
          releaseDate={card.releaseDate}
          id={card.id}
        />
      ))}
    </Stack>
  );
};
