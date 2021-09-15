import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateSlider, uploadSlider} from '../../../../action/Trailer'

const MobUpload = ({sliderId,setSliderId}) => {
    const [trailerData,setTrailerData]=useState({carousel1:'',carousel2:'',carousel3:'',download:''})
    const slider=useSelector((state)=>sliderId ? state.slider.find((d)=>d._id === sliderId ) : null)
    const dispatch=useDispatch()


    const handleSubmit=(e)=>{
        e.preventDefault()

        if(sliderId){
            dispatch(updateSlider(sliderId,trailerData))
        }else{
            dispatch(uploadSlider(trailerData))
        }
        clear()
    }
    const clear=()=>{
        setSliderId(null)
        setTrailerData({...trailerData,carousel1:'',carousel2:'',carousel3:'',download:''})
    }
    const handleChange=(e)=>{
        setTrailerData({...trailerData,[e.target.name]:e.target.value})
    }
    useEffect(() => {
        if(slider) setTrailerData(slider);
    }, [slider])
    return (
        <>
             <div className="trailer-data">
                <h5>Add Mobile Carousel :-</h5>
                <div className="trailer-data-form">
                    <form onSubmit={handleSubmit} >
                        <div className="trailer-detail">
                            <div className="trailer-detail-input">
                                <span className="detail">1st Carousel</span>
                                <input type="text" placeholder='Trailer Link' value={trailerData.carousel1} name='carousel1' onChange={handleChange} required />
                            </div>
                            <div className="trailer-detail-input">
                                <span className="detail">2nd Carousel</span>
                                <input type="text" placeholder='Poster Link' value={trailerData.carousel2} name='carousel2' onChange={handleChange} required />
                            </div>
                            <div className="trailer-detail-input">
                                <span className="detail">3rd Carousel</span>
                                <input type="text" placeholder='Description' value={trailerData.carousel3} name='carousel3' onChange={handleChange} required />
                            </div>
                            <div className="trailer-detail-input">
                                <span className="detail">Download Link</span>
                                <input type="text" placeholder='Download Link' value={trailerData.download} name='download' onChange={handleChange} required />
                            </div>
                            
                            <div className="trailer-submit">
                                <button type='submit'>Add</button>
                            </div>
                            <div className="trailer-submit">
                                <button type='reset' onClick={clear}>clear</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>   
        </>
    )
}

export default MobUpload
