import axios from "axios";
import { GET_MOVIES, NOMINATE_MOVIE, REMOVE_MOVIE } from "./types.js";

export const getMovies = (name) => async (dispatch) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?s=${name}&apikey=7f85ed74`
  );
  let result = res.data.Search ?? [];
  dispatch({
    type: GET_MOVIES,
    payload: { result, search_param: name },
  });
};

export const nominateMovie = (movie) => (dispatch) => {
  dispatch({
    type: NOMINATE_MOVIE,
    payload: movie,
  });
};

export const removeMovie = (movie) => (dispatch) => {
  dispatch({
    type: REMOVE_MOVIE,
    payload: movie,
  });
};
