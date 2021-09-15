import * as api from '../../api/index'
import { CREATE_WEBSHOW,UPDATE_WEBSHOW,DELETE_WEBSHOW,GET_ALL_WEBSHOW,GET_WEBSHOW,GET_WEBSHOW_BY_ID } from '../../constants/actionTypes'

export const getWebShow=()=>async(dispatch)=>{
    try {
        const {data}=await api.getWebShow()
        dispatch({type:GET_WEBSHOW,payload: {data}})
    } catch (error) {
        console.log(error)
    }
}

export const getAllWebShow=(page)=>async(dispatch)=>{
    try {
        const {data:{data,currentPage,totalPages}}=await api.getAllWebShow(page)
        dispatch({type:GET_ALL_WEBSHOW,payload: {data,currentPage,totalPages}})
    } catch (error) {
        console.log(error)
    }
}

export const getWebShowById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getWebShowById(id)
        console.log(data)
        dispatch({type:GET_WEBSHOW_BY_ID,payload: {data}})
    } catch (error) {
        console.log(error)
    }
}
export const getSecondaryWebShowById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getWebShowById(id)
        console.log(data)
        dispatch({type:'GET_SECONDARY_WEBSHOW_BY_ID',payload: {data}})
    } catch (error) {
        console.log(error)
    }
}

export const createWebShow=(newData)=>async(dispatch)=>{
    try {
        const {data}=await api.createWebShow(newData)
        dispatch({type:CREATE_WEBSHOW,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateWebShow=(id,newData)=>async(dispatch)=>{
    try {
        const {data}=await api.updateWebShow(id,newData)
        dispatch({type:UPDATE_WEBSHOW,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteWebShow=(id)=>async(dispatch)=>{
    try {
        await api.deleteWebShow(id)
        dispatch({type:DELETE_WEBSHOW,payload: id})
    } catch (error) {
        console.log(error)
    }
}