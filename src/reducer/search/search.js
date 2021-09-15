import { GET_BY_SEARCH } from "../../constants/actionTypes";

export default (state = { movies: [] }, action) => {
  switch (action.type) {
    case GET_BY_SEARCH:
      return { ...state, movies: action.payload.movie,trend:action.payload.trend,webshow:action.payload.webshow,tvshow:action.payload.tvshow};
    default:
      return state;
  }
};
