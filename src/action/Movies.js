import * as api from '../api/index'
import { CREATE_MOVIES, DELETE_MOVIES, GET_MOVIES, GET_MOVIES_BY_ID, UPDATE_MOVIES } from '../constants/actionTypes'

export const createMovies=(newpost)=>async(dispatch)=>{
    try {
        const {data}=await api.createMovies(newpost)
        dispatch({type:CREATE_MOVIES,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getMovies=()=>async(dispatch)=>{
    try {
        const {data}=await api.getMovies()
        dispatch({type:GET_MOVIES,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getMoviesById=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getMoviesById(id)
        dispatch({type:GET_MOVIES_BY_ID,payload: {detail:data}})
    
    } catch (error) {
        console.log(error)
    }
}

export const updateMovies=(id,newData)=>async(dispatch)=>{
    try {
        const {data}=await api.updateMovies(id,newData)
        dispatch({type: UPDATE_MOVIES,payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deletemovies=(id)=>async(dispatch)=>{
    try {
        await api.deleteMovies(id)
        dispatch({type:DELETE_MOVIES,payload: id})
    } catch (error) {
        console.log(error)
    }
}