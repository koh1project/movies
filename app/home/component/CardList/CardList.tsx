import { Stack } from "@fluentui/react";
import React from "react";

import { Card, CardProps } from "../Card/Card";

export type CardListProps = {
  cards: CardProps[];
};

export const CardList: React.FC<CardListProps> = ({ cards }) => {
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
        <Card
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
