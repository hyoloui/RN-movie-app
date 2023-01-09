const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "96b0378b0b6a672c7220f91a3bded15f";

export const getNowPlaying = () =>
  fetch(
    `${BASE_URL}/now_playing?api_key=${API_KEY}&language=ko-Korean&page=1`
  ).then((res) => res.json());

export const getTopRated = () =>
  fetch(
    `${BASE_URL}/top_rated?api_key=${API_KEY}&language=ko-Korean&page=1`
  ).then((res) => res.json());

export const getUpcoming = ({ pageParam = 1 }) => {
  console.log("🚀 ~ file: api.js:15 ~ getUpcoming ~ pageParam", pageParam);
  return fetch(
    `${BASE_URL}/upcoming?api_key=${API_KEY}&language=ko-Korean&page=${pageParam}`
  ).then((res) => res.json());
};

export const getDetail = async (params) => {
  console.log("params", params);
  const [_, cardId] = params.queryKey;
  return fetch(
    `${BASE_URL}/${cardId}?api_key=${API_KEY}&language=ko-Korean&append_to_response=videos`
  ).then((res) => res.json());
};
