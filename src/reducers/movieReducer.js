const { GET_MOVIES } = require("../actions/types");
const initialState = {
  movies: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};
