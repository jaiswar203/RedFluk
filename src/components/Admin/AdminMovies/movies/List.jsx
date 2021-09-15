import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMov } from "../../../../action/movies/Mov";


const List = ({setCurrentId}) => {
  const movies = useSelector((state) => state.mov.movies);
  
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
            <th>Name</th>
            <th>Edit</th>
          </tr>
            {
                movies?.map((data,index=0)=>(
                    <tr key={data?._id}>
                 
            <td>{index+1}</td>
            <td>{data?.title}</td>
            <td>{data?.name}</td>
            <td>
              <i className="fas fa-pen" onClick={()=>setCurrentId(data?._id)}  ></i> <i className="fas fa-trash" onClick={()=>dispatch(deleteMov(data?._id))} ></i>
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
