import * as api from '../../api/index'
import { FILTER_TV_ACTION, FILTER_TV_ADVEN, FILTER_TV_CRIME, FILTER_TV_ROMANCE, FILTER_TV_SCIFI, FILTER_TV_THRILLER } from '../../constants/actionTypes'

export const filterTvAction=(page)=>async(dispatch)=>{
    try {
        const {data: {data,currentPage,totalPages}}=await api.filterTvAction(page)
        console.log(data)
        dispatch({type:FILTER_TV_ACTION,payload: {data,currentPage,totalPages}})
    } catch (error) {
        console.log(error)
    }
}

export const filterTvAdven=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterTvAdven(page)
        dispatch({type:FILTER_TV_ADVEN,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterTvCrime=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterTvCrime(page)
        dispatch({type:FILTER_TV_CRIME,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterTvRomance=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterTvRomance(page)
        dispatch({type:FILTER_TV_ROMANCE,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterTvScifi=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterTvScifi(page)
        dispatch({type:FILTER_TV_SCIFI,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterTvThriller=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterTvThriller(page)
        dispatch({type:FILTER_TV_THRILLER,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}