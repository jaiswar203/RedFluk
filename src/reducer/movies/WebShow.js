import { GET_WEBSHOW,GET_ALL_WEBSHOW,GET_WEBSHOW_BY_ID,UPDATE_WEBSHOW,DELETE_WEBSHOW,CREATE_WEBSHOW } from "../../constants/actionTypes";

export default(state={movies:[]},action)=>{
    switch (action.type) {
        case CREATE_WEBSHOW:
            return {...state,movies:action.payload}
        case GET_WEBSHOW:
            return {...state,movie:action.payload.data}
        case GET_ALL_WEBSHOW:
            return {...state,movies:action.payload.data,
                currentPage:action.payload.currentPage,totalPages:action.payload.totalPages}
        case GET_WEBSHOW_BY_ID:
            return {...state,detail:action.payload.data}
        case 'GET_SECONDARY_WEBSHOW_BY_ID':
            return {...state,details:action.payload.data}
        case UPDATE_WEBSHOW:
            return {...state,movies:state.movies.map((movie)=>movie._id===action.payload._id ? action.payload :movie)}
        case DELETE_WEBSHOW:
            return {...state,movies: state.movies.filter((movie)=>movie._id!==action.payload)}
        default:
            return state
    }
}