"use client";

import React from "react";
import { Stack, initializeIcons } from "@fluentui/react";

import { CardType, Card } from "../Card/Card";

import { ShimmerCard } from "../Card/ShimmerCard";

import { useMovies } from "../../hooks/useMovies";

export type CardListProps = {
  cards: CardType[];
  currentPage: number;
};

export const CardList: React.FC<CardListProps> = (props) => {
  initializeIcons();

  const { cards, ref, loading } = useMovies({ initialCards: props.cards, page: props.currentPage });

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

      {loading && (
        <>
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </>
      )}
    </Stack>
  );
};
