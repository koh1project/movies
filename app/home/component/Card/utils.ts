import { CARD_PREVIEW_IMAGE_SIZE_WIDTH, CARD_PREVIEW_IMAGE_SIZE_HEIGHT } from "../../const";

import { CardType } from "./Card";

import { PopularMovie } from "@/app/lib/http/movie/movie.service";

export const convertMovieResponseToCard = (movies: PopularMovie[] | undefined): CardType[] => {
  if (movies === undefined) {
    return [];
  }

  return movies.map((movie) => ({
    title: movie.title || movie.original_title || "",
    imagePath: `https://www.themoviedb.org/t/p/w${CARD_PREVIEW_IMAGE_SIZE_WIDTH}_and_h${CARD_PREVIEW_IMAGE_SIZE_HEIGHT}_bestv2/${movie.poster_path}`,
    releaseDate: movie.release_date || "",
    id: movie.id || 0,
  }));
};
