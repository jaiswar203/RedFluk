import { FILTER_WEB_ACTION, FILTER_WEB_ADVEN, FILTER_WEB_CRIME, FILTER_WEB_ROMANCE, FILTER_WEB_SCIFI, FILTER_WEB_THRILLER } from "../../constants/actionTypes";

export default(state={},action)=>{
    switch (action.type) {
        case FILTER_WEB_ACTION:
            return {...state,Action:action.payload.data,
                actionCurrentPage:action.payload.currentPage,actiontotalPages:action.payload.totalPages}
        case FILTER_WEB_ADVEN:
            return {...state,Adventure:action.payload.data,advenCurrentPage:action.payload.currentPage,adventotalPages:action.payload.totalPages}
        case FILTER_WEB_CRIME:
            return {...state,Crime:action.payload.data,crimeCurrentPage:action.payload.currentPage,crimetotalPages:action.payload.totalPages}
        case FILTER_WEB_ROMANCE:
            return {...state,Romance:action.payload.data,romCurrentPage:action.payload.currentPage,romtotalPages:action.payload.totalPages}
        case FILTER_WEB_SCIFI:
            return {...state,Scifi:action.payload.data,scifiCurrentPage:action.payload.currentPage,scifitotalPages:action.payload.totalPages}
        case FILTER_WEB_THRILLER:
            return {...state,Thriller:action.payload.data,thrillerCurrentPage:action.payload.currentPage,thrillertotalPages:action.payload.totalPages}
        default:
            return state
    }
}