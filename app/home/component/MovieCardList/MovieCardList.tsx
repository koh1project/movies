"use client";

import React from "react";
import { Stack, initializeIcons } from "@fluentui/react";

import { REQUEST_STATE_TYPES, useMovies } from "../../hooks/useMovies";
import { MovieCardType, MovieCard } from "../MovieCard/MovieCard";
import { ShimmerCard } from "../MovieCard/ShimmerCard";

export type MovieCardListProps = {
  movieCards: MovieCardType[];
  currentPage: number;
};

export const MovieCardList: React.FC<MovieCardListProps> = ({
  movieCards,
  currentPage: pageNumber,
}) => {
  initializeIcons();

  const { cards, ref, requestState } = useMovies({
    initialCards: movieCards,
    page: pageNumber,
  });

  return (
    <Stack
      horizontal
      wrap
      horizontalAlign="start"
      tokens={{
        childrenGap: 20,
      }}
    >
      {cards.map((card, idx) => (
        <MovieCard
          key={`${card.id}-${idx}`}
          title={card.title}
          imagePath={card.imagePath}
          releaseDate={card.releaseDate}
          id={card.id}
          inViewRef={idx === cards.length - 1 ? ref : undefined}
        />
      ))}

      {requestState.state === REQUEST_STATE_TYPES.LOADING && (
        <>
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </>
      )}
    </Stack>
  );
};
