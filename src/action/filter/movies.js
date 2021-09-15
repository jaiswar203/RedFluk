import * as api from '../../api/index'
import { FILTER_ACTION, FILTER_ADVEN, FILTER_CRIME, FILTER_ROMANCE, FILTER_SCIFI, FILTER_THRILLER } from '../../constants/actionTypes'

export const filterAction=(page)=>async(dispatch)=>{
    try {
        const {data: {data,currentPage,totalPages}}=await api.filterAction(page)
        dispatch({type:FILTER_ACTION,payload: {data,currentPage,totalPages}})
    } catch (error) {
        console.log(error)
    }
}

export const filterAdven=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterAdven(page)
        dispatch({type:FILTER_ADVEN,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterCrime=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterCrime(page)
        dispatch({type:FILTER_CRIME,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterRomance=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterRomance(page)
        dispatch({type:FILTER_ROMANCE,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterScifi=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterScifi(page)
        dispatch({type:FILTER_SCIFI,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}

export const filterThriller=(page)=>async(dispatch)=>{
    try {
        
        const {data: {data,currentPage,totalPages}}=await api.filterThriller(page)
        dispatch({type:FILTER_THRILLER,payload: {data,currentPage,totalPages}})
        
    } catch (error) {
        console.log(error)
    }
}