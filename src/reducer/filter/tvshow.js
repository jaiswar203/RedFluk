import { FILTER_TV_ACTION, FILTER_TV_ADVEN, FILTER_TV_CRIME, FILTER_TV_ROMANCE, FILTER_TV_SCIFI, FILTER_TV_THRILLER } from "../../constants/actionTypes";

export default(state={},action)=>{
    switch (action.type) {
        case FILTER_TV_ACTION:
            return {...state,Action:action.payload.data,
                actionCurrentPage:action.payload.currentPage,actiontotalPages:action.payload.totalPages}
        case FILTER_TV_ADVEN:
            return {...state,Adventure:action.payload.data,advenCurrentPage:action.payload.currentPage,adventotalPages:action.payload.totalPages}
        case FILTER_TV_CRIME:
            return {...state,Crime:action.payload.data,crimeCurrentPage:action.payload.currentPage,crimetotalPages:action.payload.totalPages}
        case FILTER_TV_ROMANCE:
            return {...state,Romance:action.payload.data,romCurrentPage:action.payload.currentPage,romtotalPages:action.payload.totalPages}
        case FILTER_TV_SCIFI:
            return {...state,Scifi:action.payload.data,scifiCurrentPage:action.payload.currentPage,scifitotalPages:action.payload.totalPages}
        case FILTER_TV_THRILLER:
            return {...state,Thriller:action.payload.data,thrillerCurrentPage:action.payload.currentPage,thrillertotalPages:action.payload.totalPages}
        default:
            return state
    }
}