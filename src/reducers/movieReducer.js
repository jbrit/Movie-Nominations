const {
  GET_MOVIES,
  NOMINATE_MOVIE,
  REMOVE_MOVIE,
} = require("../actions/types");
const current_nominations = localStorage.getItem("nominations")
  ? JSON.parse(localStorage.getItem("nominations"))
  : [];

const initialState = {
  movies: [],
  nominations: [...current_nominations],
  search_param: "",
};
let active_nominations;
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...action.payload.result],
        search_param: action.payload.search_param,
      };
    case NOMINATE_MOVIE:
      active_nominations = [...state.nominations, action.payload];
      localStorage.setItem("nominations", JSON.stringify(active_nominations));
      return {
        ...state,
        nominations: [...active_nominations],
      };
    case REMOVE_MOVIE:
      active_nominations = state.nominations.filter(
        (movie) => action.payload.imdbID !== movie.imdbID
      );
      localStorage.setItem("nominations", JSON.stringify(active_nominations));
      return {
        ...state,
        nominations: [...active_nominations],
      };
    default:
      return state;
  }
};
