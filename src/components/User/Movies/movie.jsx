import React from 'react'
import { useHistory } from 'react-router-dom'

const Movie = ({data}) => {
    const history=useHistory()
    const openPost=()=>{
        history.push(`/movdetails/${data._id}`)
      }
    console.log(data)
    return (
            <div className="cards-poster" key={data._id} >
                <img src={data.poster} alt={data.detailtitle}  />
            </div>   
    )
}

export default Movie
