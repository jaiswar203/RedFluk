import { CREATE_ANIME_MOV, DELETE_ANIME_MOV, GET_ALL_ANIME_MOV, GET_ANIME_MOV, GET_ANIME_MOV_BY_ID, UPDATE_ANIME_MOV,START_LOADING,END_LOADING } from "../../../constants/actionTypes";

export default(state={isLoading: true,movies:[]},action)=>{
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading:true}
        case END_LOADING:
            return {...state,isLoading:false}
        case CREATE_ANIME_MOV:
            return {...state,movies:action.payload}
        case GET_ANIME_MOV:
            return {...state,movie:action.payload.data}
        case GET_ALL_ANIME_MOV:
            return {...state,movies:action.payload.data,
                currentPage:action.payload.currentPage,totalPages:action.payload.totalPages}
        case GET_ANIME_MOV_BY_ID:
            return {...state,detail:action.payload.data}
        case UPDATE_ANIME_MOV:
            return {...state,movies:state.movies.map((movie)=>movie._id===action.payload._id ? action.payload :movie)}
        case DELETE_ANIME_MOV:
            return {...state,movies: state.movies.filter((movie)=>movie._id!==action.payload)}
        default:
            return state
    }
}