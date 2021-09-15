import { FILTER_ACTION, FILTER_ADVEN, FILTER_CRIME, FILTER_ROMANCE, FILTER_SCIFI, FILTER_THRILLER } from "../../constants/actionTypes";

export default(state={filter:[]},action)=>{
    switch (action.type) {
        case FILTER_ACTION:
            return {...state,Action:action.payload.data,
                actionCurrentPage:action.payload.currentPage,actiontotalPages:action.payload.totalPages}
        case FILTER_ADVEN:
            return {...state,Adventure:action.payload.data,advenCurrentPage:action.payload.currentPage,adventotalPages:action.payload.totalPages}
        case FILTER_CRIME:
            return {...state,Crime:action.payload.data,crimeCurrentPage:action.payload.currentPage,crimetotalPages:action.payload.totalPages}
        case FILTER_ROMANCE:
            return {...state,Romance:action.payload.data,romCurrentPage:action.payload.currentPage,romtotalPages:action.payload.totalPages}
        case FILTER_SCIFI:
            return {...state,Scifi:action.payload.data,scifiCurrentPage:action.payload.currentPage,scifitotalPages:action.payload.totalPages}
        case FILTER_THRILLER:
            return {...state,Thriller:action.payload.data,thrillerCurrentPage:action.payload.currentPage,thrillertotalPages:action.payload.totalPages}
        default:
            return state
    }
}