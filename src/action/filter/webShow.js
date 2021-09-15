import * as api from '../../api/index'
import { FILTER_WEB_ACTION, FILTER_WEB_ADVEN, FILTER_WEB_CRIME, FILTER_WEB_ROMANCE, FILTER_WEB_SCIFI, FILTER_WEB_THRILLER } from '../../constants/actionTypes'

export const filterWebAction=(page)=>async(dispatch)=>{
    try {
        const {data: {data,currentPage,totalPages}}=await api.filterWebAction(page)
        console.log(data)
        dispatch({type:FILTER_WEB_ACTION,payload: {data,currentPage,totalPages}})
    } catch (error) {
        console.log(error)
    }
}

export const filterWebAdven=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterWebAdven(page)
        dispatch({type:FILTER_WEB_ADVEN,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterWebCrime=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterWebCrime(page)
        dispatch({type:FILTER_WEB_CRIME,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterWebRomance=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterWebRomance(page)
        dispatch({type:FILTER_WEB_ROMANCE,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterWebScifi=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterWebScifi(page)
        dispatch({type:FILTER_WEB_SCIFI,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterWebThriller=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterWebThriller(page)
        dispatch({type:FILTER_WEB_THRILLER,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}