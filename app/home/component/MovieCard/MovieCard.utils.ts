import { MovieCardType } from "./MovieCard";

import { PopularMovie } from "@/app/lib/http/movie/movie.service";

export const CARD_PREVIEW_IMAGE_SIZE_WIDTH = 300;
export const CARD_PREVIEW_IMAGE_SIZE_HEIGHT = 300;

export const convertMovieResponseToCard = (movies: PopularMovie[] | undefined): MovieCardType[] => {
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
