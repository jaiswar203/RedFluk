import React, { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./pagination";
import Option from "../../option/Option";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Movies = () => {
  const { movies } = useSelector((state) => state.animatedMovie);
  const query=useQuery()
  const dispatch=useDispatch()
  const page = query.get("page") || 1;
  
  useEffect(()=>{
  },[dispatch])
  return (
      <>
      <Option />
      <div className="animated-title">
        <h1>Movies</h1>
      </div>
      <div className="main-movies" style={{marginTop:'1rem'}}>
        <div className="cards">
          {movies?.map((data) => (
            <div className="cards-poster" key={data._id}>
              <Link to={`/movdetails/${data._id}`}>
                <img src={data.poster} alt={data.detailtitle}  />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        <Pagination page={page} />
      </div>
    </>
    
  );
};

export default Movies;
