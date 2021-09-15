import * as api from '../api/index'
import {UPLOAD_TRAILER,UPLOAD_SLIDER,FETCH_SLIDER,FETCH_TRAILER,FETCH_LAST_SLIDER,FETCH_LAST_TRAILER, UPDATE_TRAILER,UPDATE_SLIDER, DELETE_TRAILER, DELETE_SLIDER} from '../constants/actionTypes'

// create

export const uploadTrailer=(trailerData)=>async(dispatch)=>{
    try {
        const {data}=await api.createtrailer(trailerData)

        dispatch({type : UPLOAD_TRAILER,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const uploadSlider=(sliderData)=>async(dispatch)=>{
    try {
        const {data}= await api.createSlider(sliderData)
        dispatch({type : UPLOAD_SLIDER,payload:data})
    } catch (error) {
            console.log("Enter correct value",error.message)
    }
}

// fetch
export const fetchSlider=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchSlider()
        dispatch({type: FETCH_SLIDER,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const fetchLastSlider=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchLastSlider()
        dispatch({type: FETCH_LAST_SLIDER,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const fetchTrailer=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchTrailer()
        
        
        dispatch({type: FETCH_TRAILER,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const fetchLastTrailer=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchLastTrailer()
        
        dispatch({type: FETCH_LAST_TRAILER,payload:data})
    } catch (error) {
        console.log(error)
    }
}

// update

export const updateTrailer=(id,trailer)=>async(dispatch)=>{
    try {
        const {data}=await api.updateTrailer(id,trailer)

        dispatch({type: UPDATE_TRAILER,payload: data})
    } catch (error) {
        console.log(error)
    }
}
export const updateSlider=(id,slider)=>async(dispatch)=>{
    try {
        const {data}=await api.updateSlider(id,slider)

        dispatch({type: UPDATE_SLIDER,payload: data})
    } catch (error) {
        console.log(error)
    }
}

// delete

export const deleteTrailer=(id)=>async(dispatch)=>{
    try {
        await api.deleteTrailer(id)
        dispatch({type: DELETE_TRAILER,payload : id})
    } catch (error) {
        console.log(error)
    }
}

export const deleteSlider=(id)=>async(dispatch)=>{
    try {
        await api.deleteSlider(id)
        dispatch({type: DELETE_SLIDER,payload : id})
    } catch (error) {
        console.log(error)
    }
}