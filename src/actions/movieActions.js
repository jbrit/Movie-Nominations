import axios from "axios";
import { GET_MOVIES } from "./types.js";

export const getMovies = (name) => async (dispatch) => {
  const res = await axios.get(
    `http://www.omdbapi.com/?s=${name}&apikey=7f85ed74`
  );

  dispatch({
    type: GET_MOVIES,
    payload: res.data.Search,
  });
};
