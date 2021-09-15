import React from "react";
import { Link } from "react-router-dom";

const TvShow = ({tvshow}) => {
  return (
    <div className="main-movies">
      <div className="cards">
        {tvshow?.length === 0 ? (
          <div className="no-result">
            <h5>No result Found</h5>
          </div>
        ) : (
          tvshow?.map((data) => (
            <div className="cards-poster" key={data._id}>
              <Link to={`/webshowdetails/${data._id}`}>
                <img src={data.poster} alt="" srcset="" />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TvShow;
