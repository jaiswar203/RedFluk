import React, { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./pagination";
import Option from "../option/Option";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Movies = () => {
  const { movies,isLoading } = useSelector((state) => state.mov);
  const query=useQuery()
  const dispatch=useDispatch()
  const page = query.get("page") || 1;
  
  useEffect(()=>{
  },[dispatch])
  return (
      <>
      <Option />
      <div className="main-movies">
        <div className="cards">
          {movies?.map((data) => (
              <Link to={`/movdetails/${data._id}`}>
            <div className="cards-poster" key={data._id}>
                <img src={data.poster} alt={data.detailtitle}  />
            </div>
              </Link>
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
