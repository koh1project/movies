import { GetMethodParams, get } from "../request";

const BASE_PATH_MOVIE = "movie";
const PATH_MOVIES = {
  POPULAR: `${BASE_PATH_MOVIE}/popular`,
};

export const fetchPopularMovies = async (params?: GetMethodParams["params"]) => {
  try {
    const response = await get({
      path: PATH_MOVIES.POPULAR,
      params,
    });

    if (response.ok === false) {
      throw response;
    }

    return await response.json();
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};
