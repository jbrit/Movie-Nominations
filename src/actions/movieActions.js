import axios from "axios";
import { GET_MOVIES, NOMINATE_MOVIE, REMOVE_MOVIE } from "./types.js";

export const getMovies = (name) => async (dispatch) => {
  const res = await axios.get(
    `http://www.omdbapi.com/?s=${name}&apikey=7f85ed74`
  );

  dispatch({
    type: GET_MOVIES,
    payload: res.data.Search,
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
