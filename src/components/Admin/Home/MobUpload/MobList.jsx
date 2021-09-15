import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSlider } from '../../../../action/Trailer'

const MobList = ({setSliderId}) => {
    const sliderData=useSelector((state)=>state.slider) 
    const dispatch=useDispatch()
    return (
        <>
           <div className="trailer-data-list">
                <h5>List :-</h5>
                <div className="tariler-data-list-detail"> 
                    <table className="trailer-table">
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Edit</th>
                        </tr>
                        {sliderData.map((data,index=0)=>(
                        <tr key={data._id}>
                            <td>{index+1} </td>
                            <td>{data._id}</td>
                            <td><i className="fas fa-pen" onClick={()=> setSliderId(data._id)} ></i> <i className="fas fa-trash" onClick={()=>dispatch(deleteSlider(data._id))}></i></td>
                        </tr>
                        ))}
                       
                    </table>
                </div>
            </div>    
        </>
    )
}

export default MobList
