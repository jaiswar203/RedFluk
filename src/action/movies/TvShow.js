import * as api from '../../api/index'
import { CREATE_TV_SHOW,UPDATE_TV_SHOW,DELETE_TV_SHOW,GET_ALL_TV_SHOW,GET_TV_SHOW,GET_TV_SHOW_BY_ID } from '../../constants/actionTypes'

export const getTvShow=()=>async(dispatch)=>{
    try {
        const {data}=await api.getTvShow()
        dispatch({type:GET_TV_SHOW,payload: {data}})
    } catch (error) {
        console.log(error)
    }
}

export const getAllTvShow=(page)=>async(dispatch)=>{
    try {
        const {data:{data,currentPage,totalPages}}=await api.getAllTvShow(page)
        dispatch({type:GET_ALL_TV_SHOW,payload: {data,currentPage,totalPages}})
    } catch (error) {
        console.log(error)
    }
}

export const getTvShowById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getTvShowById(id)
        console.log(data)
        dispatch({type:GET_TV_SHOW_BY_ID,payload: {data}})
    } catch (error) {
        console.log(error)
    }
}
export const getSecondaryTvShowById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getTvShowById(id)
        console.log(data)
        dispatch({type:'GET_SECONDARY_TV_SHOW_BY_ID',payload: {data}})
    } catch (error) {
        console.log(error)
    }
}

export const createTvShow=(newData)=>async(dispatch)=>{
    try {
        const {data}=await api.createTvShow(newData)
        dispatch({type:CREATE_TV_SHOW,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateTvShow=(id,newData)=>async(dispatch)=>{
    try {
        const {data}=await api.updateTvShow(id,newData)
        dispatch({type:UPDATE_TV_SHOW,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteTvShow=(id)=>async(dispatch)=>{
    try {
        await api.deleteTvShow(id)
        dispatch({type:DELETE_TV_SHOW,payload: id})
    } catch (error) {
        console.log(error)
    }
}