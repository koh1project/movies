import { fetchPopularMovies } from "../lib/http/movie/movie.service";

import { CardList, CardListProps } from "./component/CardList/CardList";
import { convertMovieResponseToCard } from "./component/Card/utils";

export default async function Home() {
  const movies = await fetchPopularMovies({ page: String(1) });
  const cards: CardListProps["cards"] = convertMovieResponseToCard(movies.results);

  return (
    <main>
      <div>
        <CardList cards={cards} currentPage={movies.page || 0} />
      </div>
    </main>
  );
}
