import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovById } from "../../../action/movies/Mov";

const MovieDetail = () => {
  const { detail,isLoading } = useSelector((state) => state.mov);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovById(id));
  }, [id,dispatch]);


  if (!detail) return null;

  function Trailertoggle() {
    const Movies = document.querySelector(".movies-trailer");
    Movies.classList.add("open");
  }
  function Trailerremove() {
    const Movies = document.querySelector(".movies-trailer");
    var iframe_vid = document.querySelector("iframe");
    Movies.classList.remove("open");
    if (iframe_vid) {
      // to stop embed video on click
      let iframeSrc = iframe_vid.src;
      iframe_vid.src = iframeSrc;
    }
  }

  if(isLoading){
    return (
      <CircularProgress />
    )
  }
  return (
    <>
      <div className="movies-detail">
        <div className="movies-detail-poster">
          <img src={detail.poster} alt={detail.detailtitle} />
        </div>
        <div className="movies-detail-info">
          <p>{detail.detailtitle}</p>
          {/*max 5 lines*/}
          <div className="trailerbtn" onClick={Trailertoggle}>
            <button>
              <i class="fas fa-play"></i>Trailer
            </button>
          </div>
        </div>
      </div>

      <div className="movies-trailer">
        <div className="movies-trailer-title" onClick={Trailerremove}>
          <i className="fas fa-times"></i>
        </div>
        <div className="movies-trailers">
          <iframe
            src={`https://www.youtube.com/embed/${detail.youtube}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="movies-details">
        <div className="movies-details-para">
          <p>
            <strong>Genre: </strong>
            <a href="/details">
              {detail.genre.map((p, i) => (i === 0 ? p : `,${p}`))}
            </a>
          </p>
          <p>
            <strong>Director: </strong>
            <a href="/details">{detail.director} </a>
          </p>
          <p style={{ display: "flex" }}>
            <strong>Duration: </strong>
            <h6 style={{ margin: "3px  0 0 2px" }}>{detail.duration}</h6>
          </p>
          <p>
            <strong>Quality: </strong>
            <h6>{detail.quality}</h6>
          </p>
          <p>
            <strong>Release: </strong>
            <h6>{detail.release}</h6>
          </p>
          <p>
            <strong>IMDB: </strong>
            <h6>{detail.imdb}</h6>
          </p>
        </div>
        <p style={{ marginTop: "4px", color: "gray" }}>{detail.description}</p>
      </div>

      <div className="movies-hr">
        <hr />
      </div>

      <div className="movies-title">
        <h1>Screenshots</h1>
      </div>
      <div className="movies-snap">
        <div className="movies-snaps">
          {detail.screenshots.map((p) => (
            <img src={p} alt="" />
          ))}
        </div>
      </div>
      <div className="movies-hr">
        <hr />
      </div>
      <div className="movies-title">
        <h1>Download Now</h1>
      </div>

      <div className="movies-links">
        <div className="movies-links-google">
          <span>Google drive</span>
          <div className="movies-links-link">
            <Link to={`/download/movies/${id}?quality=480p`}>
              <button>
                {" "}
                <i className="fas fa-download"></i> 480p
              </button>
            </Link>
            <Link to={`/download/movies/${id}?quality=720p`}>
              <button>
                {" "}
                <i className="fas fa-download"></i> 720p
              </button>
            </Link>
            <Link to={`/download/movies/${id}?quality=1080p`}>
              <button>
                {" "}
                <i className="fas fa-download"></i> 1080p
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
