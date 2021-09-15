import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, Link } from "react-router-dom";
import { getSecondaryWebShowById, getWebShowById } from "../../../../action/movies/WebShow";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Secondary = () => {
  const { id } = useParams();
  const { details } = useSelector((state) => state.webshow);
  const dispatch = useDispatch();
  const query = useQuery();
  var url = [];
  const quality = query.get("quality");
  useEffect(() => {
    dispatch(getSecondaryWebShowById(id));
  }, [id]);
  if (quality === "480p") {
    url = details?.gdrive1;
  } else if (quality === "720p") {
    url = details?.gdrive2;
  } else if (quality === "1080p") {
    url = details?.gdrive3;
  } else {
    url = [];
  }

  return (
    <>
      <div className="episode-list">
        <div className="episode-list-download">
          <div className="download-link">
            {url?.map((data,index) => (
              <Link className="download-link" to={`/download/webshow/${id}?quality=${quality}&index=${index}`}>
                <h1>Episode {index+1}</h1>
                <hr />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondary;
