import React from "react";
import { Link } from "react-router-dom";

const Movies = ({movies}) => {

  return (
    <div className="main-movies">
      <div className="cards">
        {movies?.length === 0 ? (
          <div className="no-result">
            <h5>No result Found</h5>
          </div>
        ) : (
          movies?.map((data) => (
            <div className="cards-poster" key={data._id}>
              <Link to={`/movdetails/${data._id}`}>
                <img src={data.poster} alt="" srcset="" />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;
