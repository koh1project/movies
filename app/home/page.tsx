import { fetchPopularMovies } from "../lib/http/movie/movie.service";

import { convertMovieResponseToCard } from "./component/MovieCard/MovieCard.utils";
import { MovieCardListProps, MovieCardList } from "./component/MovieCardList/MovieCardList";

export default async function Home() {
  const movies = await fetchPopularMovies({ page: String(1) });
  const movieCards: MovieCardListProps["movieCards"] = convertMovieResponseToCard(movies.results);

  return (
    <main>
      <div>
        <MovieCardList movieCards={movieCards} currentPage={movies.page || 0} />
      </div>
    </main>
  );
}
