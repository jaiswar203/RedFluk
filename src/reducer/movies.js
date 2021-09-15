import { GET_MOVIES,CREATE_MOVIES, UPDATE_MOVIES, DELETE_MOVIES, GET_MOVIES_BY_ID } from "../constants/actionTypes";

export default(movies=[],action)=>{
    switch(action.type){
        case GET_MOVIES:
            return action.payload
        case CREATE_MOVIES:
            return [...movies,action.payload]    
        case UPDATE_MOVIES:
            return movies.map((movie)=>movie._id === action.payload._id ? action.payload : movie)
        
        case DELETE_MOVIES:
            return movies.filter((movie)=>movie._id !== action.payload._id )
        default:
            return movies
    }
}