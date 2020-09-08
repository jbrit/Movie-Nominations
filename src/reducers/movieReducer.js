const { GET_MOVIES, NOMINATE_MOVIE } = require("../actions/types");
const initialState = {
  movies: [],
  nominations: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case NOMINATE_MOVIE:
      return {
        ...state,
        nominations: [...state.nominations, action.payload],
      };
    default:
      return state;
  }
};
