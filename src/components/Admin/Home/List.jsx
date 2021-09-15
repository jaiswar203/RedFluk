import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteTrailer } from "../../../api";


const List = ({setTrailerId}) => {
  const trailerData = useSelector((state) => state.trailer);
  const dispatch=useDispatch()

  return (
    <div className="trailer-data-list">
      <h5>List :-</h5>
      <div className="tariler-data-list-detail">
        <table className="trailer-table">
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Edit</th>
          </tr>
            {
                trailerData.map((data,index=0)=>(
                    <tr key={data._id}>
                 
            <td>{index+1}</td>
            <td>{data.title}</td>
            <td>
              <i className="fas fa-pen" onClick={()=> setTrailerId(data._id)} ></i> <i className="fas fa-trash" onClick={()=>dispatch(deleteTrailer(data._id))} ></i>
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
