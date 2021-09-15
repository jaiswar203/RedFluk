import * as api from '../api'


export const getMovies=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchMovies()
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const createMovies=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createMovies(post)
        dispatch({type:CREATE,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const fetchTrailer=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchTrailer()
        console.log(data)
        
        dispatch({type: FETCH_TRAILER,payload: data})
    } catch (error) {
        console.log(error)
    }
}
