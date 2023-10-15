"use client";

import { Stack, initializeIcons } from "@fluentui/react";

import { CardList, CardListProps } from "./component/CardList/CardList";
import { MockPopularMovies } from "./mock";
import { CARD_PREVIEW_IMAGE_SIZE_HEIGHT, CARD_PREVIEW_IMAGE_SIZE_WIDTH } from "./const";

export default function Home() {
  initializeIcons();

  const cards: CardListProps["cards"] = MockPopularMovies.results.map((movie) => ({
    title: movie.title,
    imagePath: `https://www.themoviedb.org/t/p/w${CARD_PREVIEW_IMAGE_SIZE_WIDTH}_and_h${CARD_PREVIEW_IMAGE_SIZE_HEIGHT}_bestv2/${movie.poster_path}`,
    releaseDate: movie.release_date,
    id: movie.id,
  }));

  return (
    <main>
      <Stack>
        <CardList cards={cards} />
      </Stack>
    </main>
  );
}
