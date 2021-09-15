import {UPLOAD_TRAILER,FETCH_TRAILER, UPDATE_TRAILER, DELETE_TRAILER} from '../../constants/actionTypes'

export default (trailer=[],action)=>{
    switch (action.type) {
        case UPLOAD_TRAILER:
            return [...trailer,action.payload]
        
        case FETCH_TRAILER:
            return action.payload
        
        case UPDATE_TRAILER:
            return trailer.map((trail)=> trail._id === action.payload._id ? action.payload : trail)

        case DELETE_TRAILER:
            return trailer.filter((trail)=> trail._id !== action.payload)
            
        default:
            return trailer
    }
}