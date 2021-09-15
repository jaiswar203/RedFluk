import { FETCH_LAST_TRAILER } from "../../constants/actionTypes";

export default (slider=[],action)=>{
    switch(action.type){
        case FETCH_LAST_TRAILER:
            return action.payload
        default:
            return slider
    }
}