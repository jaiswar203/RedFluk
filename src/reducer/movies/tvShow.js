import { GET_TV_SHOW,GET_ALL_TV_SHOW,GET_TV_SHOW_BY_ID,UPDATE_TV_SHOW,DELETE_TV_SHOW,CREATE_TV_SHOW } from "../../constants/actionTypes";

export default(state={movies:[]},action)=>{
    switch (action.type) {
        case CREATE_TV_SHOW:
            return {...state,movies:action.payload}
        case GET_TV_SHOW:
            return {...state,movie:action.payload.data}
        case GET_ALL_TV_SHOW:
            return {...state,movies:action.payload.data,
                currentPage:action.payload.currentPage,totalPages:action.payload.totalPages}
        case GET_TV_SHOW_BY_ID:
            return {...state,detail:action.payload.data}
        case 'GET_SECONDARY_TV_SHOW_BY_ID':
            return {...state,details:action.payload.data}
        case UPDATE_TV_SHOW:
            return {...state,movies:state.movies.map((movie)=>movie._id===action.payload._id ? action.payload :movie)}
        case DELETE_TV_SHOW:
            return {...state,movies: state.movies.filter((movie)=>movie._id!==action.payload)}
        default:
            return state
    }
}