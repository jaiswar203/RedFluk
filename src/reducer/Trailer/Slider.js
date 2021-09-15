import {DELETE_SLIDER, FETCH_SLIDER,UPDATE_SLIDER,UPLOAD_SLIDER} from '../../constants/actionTypes'

export default (slider=[],action)=>{
    switch (action.type) {
        case UPLOAD_SLIDER:
            return [...slider,action.payload]
        case FETCH_SLIDER:
            return action.payload
        case UPDATE_SLIDER:
            return slider.map((slide)=>slide._id === action.payload._id ? action.payload : slide  )
        case DELETE_SLIDER:
            return slider.filter((slider)=>slider._id !== action.payload)
        default:
            return slider
    }
}