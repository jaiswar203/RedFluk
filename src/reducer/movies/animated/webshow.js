import { GET_ANIME_SERIES,GET_ALL_ANIME_SERIES,GET_ANIME_SERIES_BY_ID,UPDATE_ANIME_SERIES,DELETE_ANIME_SERIES,CREATE_ANIME_SERIES } from "../../../constants/actionTypes";

export default(state={movies:[]},action)=>{
    switch (action.type) {
        case CREATE_ANIME_SERIES:
            return {...state,movies:action.payload}
        case GET_ANIME_SERIES:
            return {...state,movie:action.payload.data}
        case GET_ALL_ANIME_SERIES:
            return {...state,movies:action.payload.data,
                currentPage:action.payload.currentPage,totalPages:action.payload.totalPages}
        case GET_ANIME_SERIES_BY_ID:
            return {...state,detail:action.payload.data}
        case 'GET_SECONDARY_ANIME_SERIES_BY_ID':
            return {...state,details:action.payload.data}
        case UPDATE_ANIME_SERIES:
            return {...state,movies:state.movies.map((movie)=>movie._id===action.payload._id ? action.payload :movie)}
        case DELETE_ANIME_SERIES:
            return {...state,movies: state.movies.filter((movie)=>movie._id!==action.payload)}
        default:
            return state
    }
}