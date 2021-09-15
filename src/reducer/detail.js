import {GET_MOVIES_BY_ID} from '../constants/actionTypes'

export default(state={details:[]},action)=>{
    switch (action.type) {
        case GET_MOVIES_BY_ID:
            return {...state,detail:action.payload.detail}
        default:
            return state
    }
}