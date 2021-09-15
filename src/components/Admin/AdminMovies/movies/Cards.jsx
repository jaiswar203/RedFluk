import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMov, updateMov } from "../../../../action/movies/Mov";

const Cards = ({ data, setData, currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) =>currentId ? state.mov.movies.find((p)=>p._id ===currentId) : null);
  const user = JSON.parse(localStorage.getItem("Adminprofile"))
  const [movieData, setMovieData] = useState({
    gdrive1: "",
    gdrive2: "",
    gdrive3: "",
    onedrive1: "",
    onedrive2: "",
    onedrive3: "",
    youtube: "",
    quality: "",
    screenshots: "",
    detailtitle: "",
    language:""
  });
  const handleChange = (e) => {
    if (data !== undefined) {
      setMovieData({
        ...movieData,
        [e.target.name]: e.target.value,
        poster: data?.Poster,
        description: data?.Plot,
        title: data?.Title,
        genre: data?.Genre ? data?.Genre.split(",").map((data)=>data.trim()) : data.Genre ,
        director: data?.Director,
        duration: data?.Runtime,
        release: data?.Released,
        imdb: data?.imdbRating,
      });
    } else if (data === undefined) {
      setMovieData({
        ...movieData,
        [e.target.name]: e.target.value,
      });
    }
  };


  const clear = () => {
    setData(null);
    setCurrentId(null);
    setMovieData({
      ...movieData,
      gdrive1: "",
      gdrive2: "",
      gdrive3: "",
      onedrive1: "",
      onedrive2: "",
      onedrive3: "",
      youtube: "",
      quality: "",
      screenshots: "",
      detailtitle: "",
      language:""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateMov(currentId, {...movieData,name:user?.result?.name}));

    } else {
      dispatch(createMov({...movieData,name:user?.result?.name,datatype:'movie'}));
  
    }
    clear();
  };

  
  useEffect(() => {
      setMovieData(movies)
  }, [movies]);
  return (
    <>
      <div className="trailer-data">
        <h5>Add Movies :-</h5>
        <div className="trailer-data-form">
          <form onSubmit={handleSubmit}>
            <div className="trailer-detail">
              <div className="trailer-detail-input">
                <span className="detail">Title</span>
                <input
                  type="text"
                  placeholder="Title"
                  name="detailtitle"
                  value={movieData?.detailtitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Gdrive(480p)</span>
                <input
                  type="text"
                  placeholder="gdrive Link"
                  name="gdrive1"
                  value={movieData?.gdrive1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Gdrive(720p)</span>
                <input
                  type="text"
                  value={movieData?.gdrive2}
                  placeholder="gdrive Link"
                  name="gdrive2"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Gdrive(1080p)</span>
                <input
                  type="text"
                  placeholder="gdrive link"
                  name="gdrive3"
                  value={movieData?.gdrive3}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Onedrive(480p)</span>
                <input
                  type="text"
                  placeholder="gdrive Link"
                  value={movieData?.onedrive1}
                  name="onedrive1"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Onedrive(720p)</span>
                <input
                  type="text"
                  placeholder="ondedrive Link"
                  value={movieData?.onedrive2}
                  name="onedrive2"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Onedrive(1080p)</span>
                <input
                  type="text"
                  placeholder="onedrive Link"
                  name="onedrive3"
                  value={movieData?.onedrive3}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Youtube</span>
                <input
                  type="text"
                  value={movieData?.youtube}
                  placeholder="Youtube Link"
                  name="youtube"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Quality</span>
                <input
                  type="text"
                  placeholder="Quality"
                  value={movieData?.quality}
                  name="quality"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Screenshots</span>
                <input
                  type="text"
                  placeholder="screenshots Link"
                  value={movieData?.screenshots}
                  name="screenshots"
                  onChange={(e) =>
                    setMovieData({
                      ...movieData,
                      screenshots: e.target.value.split(","),
                    })
                  }
                  required
                />
              </div>
              <div className="trailer-detail-input">
                <span className="detail">Language</span>
                <input
                  type="text"
                  placeholder="language"
                  value={movieData?.language}
                  name="language"
                  onChange={(e) =>
                    setMovieData({
                      ...movieData,
                      language: e.target.value.split(","),
                    })
                  }
                  required
                />
              </div>
              <div className="trailer-submit">
                <button type="submit">Add</button>
              </div>
              <div className="trailer-submit">
                <button type="reset" onClick={clear}>
                  clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cards;
