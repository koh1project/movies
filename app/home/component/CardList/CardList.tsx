"use client";

import React from "react";
import { Stack, initializeIcons } from "@fluentui/react";

import { CardType, Card } from "../Card/Card";

import { ShimmerCard } from "../Card/ShimmerCard";

import { REQUEST_STATE_TYPES, useMovies } from "../../hooks/useMovies";

export type CardListProps = {
  cards: CardType[];
  currentPage: number;
};

export const CardList: React.FC<CardListProps> = (props) => {
  initializeIcons();

  const { cards, ref, requestState } = useMovies({
    initialCards: props.cards,
    page: props.currentPage,
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
        <Card
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
