import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deletemovies } from '../../../../action/Movies';


const List = ({setTrailerId,setCurrentId}) => {
  const movieData = useSelector((state) => state.movies);
  const dispatch=useDispatch()

  useEffect(() => {
    
  },[dispatch])
  return (
    <div className="trailer-data-list">
      <h5>List :-</h5>
      <div className="tariler-data-list-detail">
        <table className="trailer-table">
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Name </th>
            <th>Edit</th>
          </tr>
            {
                movieData.map((data,index=0)=>(
                    <tr key={data._id}>
                 
            <td>{index+1}</td>
            <td>{data.title}</td>
            <td>{data?.name}</td>
            <td>
              <i className="fas fa-pen" onClick={()=>setCurrentId(data._id)}  ></i> <i className="fas fa-trash" onClick={()=>dispatch(deletemovies(data._id))} ></i>
            </td>
        </tr>
            ))
        }
        </table>
      </div>
    </div>
  );
};

export default List;
