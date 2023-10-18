const BASE_END_POINT = "https://api.themoviedb.org/3";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export type GetMethodParams = {
  path: string;
  headers?: { [key: string]: string };
  params?: { [key: string]: string };
  requestInit?: RequestInit;
};

export const get = async ({
  path,
  headers = DEFAULT_HEADERS,
  params,
  requestInit = { cache: "no-cache" },
}: GetMethodParams) => {
  const endpoint = `${BASE_END_POINT}/${path}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const queryString = params && new URLSearchParams(params).toString();

  const request = new Request(queryString ? `${endpoint}&${queryString}` : endpoint, {
    method: "GET",
    headers,
  });

  return fetch(request, requestInit);
};
