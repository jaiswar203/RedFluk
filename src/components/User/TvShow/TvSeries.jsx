import React from "react";
import { Link,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from './pagination'
import Option from "./Option";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const TvSeries = () => {
  const { movies } = useSelector((state) => state.tvshow);
  
  const query=useQuery()
  const page=query.get('page')
  return (
    <>
    <Option />
      <div className="main-movies">
        <div className="cards">
          {movies?.map((data) => (
            <div className="cards-poster" key={data._id}>
            
              <Link to={`/tvshowdetails/${data._id}`}>
                <img src={data.poster} alt="" srcset="" />
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

export default TvSeries;
