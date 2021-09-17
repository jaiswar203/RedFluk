import * as api from '../../api/index'
import { CREATE_MOV, DELETE_MOV, GET_ALL_MOV, GET_BY_SEARCH, GET_MOV, GET_MOV_BY_ID, UPDATE_MOV,START_LOADING,END_LOADING } from '../../constants/actionTypes'

export const getMov=()=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING})
        const {data}=await api.getMov()
        dispatch({type:GET_MOV,payload: {data}})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error)
    }
}

export const getAllMov=(page)=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING})
        const {data: {data,currentPage,totalPages}}=await api.getAllMov(page)
        dispatch({type:GET_ALL_MOV,payload: {data,currentPage,totalPages}})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error)
    }
}

export const getMovById=(id)=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING})
        const {data}=await api.getMovById(id)
        dispatch({type:GET_MOV_BY_ID,payload: {data}})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error)
    }
}

export const createMov=(newData)=>async(dispatch)=>{
    try {
        const {data}=await api.createMov(newData)
        dispatch({type:CREATE_MOV,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateMov=(id,newData)=>async(dispatch)=>{
    try {
        const {data}=await api.updateMov(id,newData)
        dispatch({type:UPDATE_MOV,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteMov=(id)=>async(dispatch)=>{
    try {
        await api.deleteMov(id)
        dispatch({type:DELETE_MOV,payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const getMovBySearch=(searchQuery)=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING})
        const {data}=await api.searchData(searchQuery)
        data.map((i)=>{
            if(i.datatype==='movie'){
                dispatch({type:GET_BY_SEARCH,payload:{movie:data}})
            }else if(i.datatype==='trend'){
                dispatch({type:GET_BY_SEARCH,payload:{trend:data}})
            }else if(i.datatype==='webseries'){
                dispatch({type:GET_BY_SEARCH,payload:{webshow:data}})
            }else if(i.datatype==='tvshow'){
                dispatch({type:GET_BY_SEARCH,payload:{tvshow:data}})
            }
        })
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error)
    }
}