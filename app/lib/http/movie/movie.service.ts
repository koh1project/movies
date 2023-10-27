import { GetMethodParams, get } from "../request";

import { ExtractResponseType } from "@/app/types";

import { paths } from "@/app/tmdb_schema";

const BASE_PATH_MOVIE = "movie";
const PATH_MOVIES = {
  POPULAR: `${BASE_PATH_MOVIE}/popular`,
};

export type FetchPopularMoviesResponse =
  paths["/3/movie/popular"]["get"]["responses"]["200"]["content"]["application/json"];

export type PopularMovie = ExtractResponseType<FetchPopularMoviesResponse["results"]>;

export const fetchPopularMovies = async (
  params?: GetMethodParams["params"],
): Promise<FetchPopularMoviesResponse> => {
  try {
    const response = await get({
      path: PATH_MOVIES.POPULAR,
      params: {
        ...params,
      },
    });

    if (response.ok === false) {
      throw response;
    }

    return await response.json();
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
};
