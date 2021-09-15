import * as api from '../../../api/index'
import { CREATE_ANIME_MOV, DELETE_ANIME_MOV, GET_ALL_ANIME_MOV, GET_ANIME_MOV, GET_ANIME_MOV_BY_ID, UPDATE_ANIME_MOV,START_LOADING,END_LOADING } from '../../../constants/actionTypes'

export const getAnimeMovie=()=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING})
        const {data}=await api.getAnimeMovie()
        dispatch({type:GET_ANIME_MOV,payload: {data}})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error)
    }
}

export const getAllAnimeMovie=(page)=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING})
        const {data: {data,currentPage,totalPages}}=await api.getAllAnimeMovie(page)
        dispatch({type:GET_ALL_ANIME_MOV,payload: {data,currentPage,totalPages}})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error)
    }
}

export const getAnimeMovieById=(id)=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING})
        const {data}=await api.getAnimeMovieById(id)
        dispatch({type:GET_ANIME_MOV_BY_ID,payload: {data}})
        dispatch({type:END_LOADING})
    } catch (error) {
        console.log(error)
    }
}

export const createAnimeMovie=(newData)=>async(dispatch)=>{
    try {
        const {data}=await api.createAnimeMovie(newData)
        dispatch({type:CREATE_ANIME_MOV,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateAnimeMovie=(id,newData)=>async(dispatch)=>{
    try {
        const {data}=await api.updateAnimeMovie(id,newData)
        dispatch({type:UPDATE_ANIME_MOV,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnimeMovie=(id)=>async(dispatch)=>{
    try {
        await api.deleteAnimeMovie(id)
        dispatch({type:DELETE_ANIME_MOV,payload: id})
    } catch (error) {
        console.log(error)
    }
}