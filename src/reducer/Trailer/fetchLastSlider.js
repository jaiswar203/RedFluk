import { FETCH_LAST_SLIDER } from "../../constants/actionTypes";

export default (slider=[],action)=>{
    switch(action.type){
        case FETCH_LAST_SLIDER:
            return action.payload
        default:
            return slider
    }
}