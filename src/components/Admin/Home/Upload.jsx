import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateTrailer, uploadTrailer } from '../../../action/Trailer'

const Upload = ({trailerId,setTrailerId}) => {
    const [trailerData,setTrailerData]=useState({title:'',trailer:'',poster:'',description:'',download:'',about:''})
    const trail=useSelector((state)=> trailerId ? state.trailer.find((d)=>d._id===trailerId) : null )
    const dispatch=useDispatch()

    
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        if(trailerId){
            dispatch(updateTrailer(trailerId,trailerData))
        }else{
            dispatch(uploadTrailer(trailerData))
        }
        clear()
    }
    const clear=()=>{
        setTrailerId(null)
        setTrailerData({title:'',trailer:'',poster:'',description:'',download:'',about:''})
    }
    const handleChange=(e)=>{
        setTrailerData({...trailerData,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        if(trail) setTrailerData(trail)
    },[trail])
    return (
        <>
            <div className="trailer-data">
                <h5>Add Trailer :-</h5>
                <div className="trailer-data-form">
                    <form onSubmit={handleSubmit} >
                        <div className="trailer-detail">
                            <div className="trailer-detail-input">
                                <span className="detail">Title</span>
                                <input type="text" placeholder='Title' name='title' value={trailerData.title} onChange={handleChange} required />
                            </div>
                            <div className="trailer-detail-input">
                                <span className="detail">Video Link</span>
                                <input type="text" placeholder='Trailer Link' name='trailer' value={trailerData.trailer} onChange={handleChange} required />
                            </div>
                            <div className="trailer-detail-input">
                                <span className="detail">Poster Link</span>
                                <input type="text" placeholder='Poster Link' name='poster' value={trailerData.poster} onChange={handleChange} required />
                            </div>
                            <div className="trailer-detail-input">
                                <span className="detail">Description</span>
                                <input type="text" placeholder='Description' name='description' value={trailerData.description} onChange={handleChange} required />
                            </div>
                            <div className="trailer-detail-input">
                                <span className="detail">Download Link</span>
                                <input type="text" placeholder='Download Link' name='download' value={trailerData.download} onChange={handleChange} required />
                            </div>
                            <div className="trailer-detail-input">
                                <span className="detail">About Link</span>
                                <input type="text" placeholder='About Link' value={trailerData.about} name='about' onChange={handleChange} required />
                            </div>
                            <div className="trailer-submit">
                                <button type='submit'>Add</button>
                            </div>
                            <div className="trailer-submit">
                                <button type='reset' onClick={clear} >Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Upload
