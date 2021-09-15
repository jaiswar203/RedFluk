import * as api from '../../../api/index'
import { CREATE_ANIME_SERIES,UPDATE_ANIME_SERIES,DELETE_ANIME_SERIES,GET_ALL_ANIME_SERIES,GET_ANIME_SERIES,GET_ANIME_SERIES_BY_ID } from '../../../constants/actionTypes'

export const getAnimeSeries=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAnimeSeries()
        dispatch({type:GET_ANIME_SERIES,payload: {data}})
    } catch (error) {
        console.log(error)
    }
}

export const getAllAnimeSeries=(page)=>async(dispatch)=>{
    try {
        const {data:{data,currentPage,totalPages}}=await api.getAllAnimeSeries(page)
        dispatch({type:GET_ALL_ANIME_SERIES,payload: {data,currentPage,totalPages}})
    } catch (error) {
        console.log(error)
    }
}

export const getAnimeSeriesById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getAnimeSeriesById(id)
        console.log(data)
        dispatch({type:GET_ANIME_SERIES_BY_ID,payload: {data}})
    } catch (error) {
        console.log(error)
    }
}
export const getSecondaryAnimeSeriesById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getAnimeSeriesById(id)
        console.log(data)
        dispatch({type:'GET_SECONDARY_ANIME_SERIES_BY_ID',payload: {data}})
    } catch (error) {
        console.log(error)
    }
}

export const createAnimeSeries=(newData)=>async(dispatch)=>{
    try {
        const {data}=await api.createAnimeSeries(newData)
        dispatch({type:CREATE_ANIME_SERIES,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateAnimeSeries=(id,newData)=>async(dispatch)=>{
    try {
        const {data}=await api.updateAnimeSeries(id,newData)
        dispatch({type:UPDATE_ANIME_SERIES,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnimeSeries=(id)=>async(dispatch)=>{
    try {
        await api.deleteAnimeSeries(id)
        dispatch({type:DELETE_ANIME_SERIES,payload: id})
    } catch (error) {
        console.log(error)
    }
}