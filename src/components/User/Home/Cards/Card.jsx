import React, { useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getMov } from "../../../../action/movies/Mov";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Card = () => {
  const dispatch=useDispatch()
  const history=useHistory()
  useEffect(()=>{
    dispatch(getMov())
  },[dispatch])
  const moviesData = useSelector((state) => state.movies);
  const {movie}=useSelector((state)=>state.mov)
  const {movie:webshow}=useSelector((state)=>state.webshow)
  const {movie:tvshow}=useSelector((state)=>state.tvshow)

  const setting = {
    spaceBetween: 5,
    slidesPerView: 3,
    loop: false,

    breakpoints: {
      // when window width is >= 480px
      500: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 7,
        spaceBetween: 5,
      },
    },
  }
  return (
    <>
      <div className="main-container">
        <div className="main-container-section">
          <h5 className="main-container-section-title">
            Trending
            {/* <i class="fas fa-arrow-right"></i> */}
          </h5>
          <Swiper {...setting} freeMode={true}>
            {moviesData?.map((movie) => (
              <SwiperSlide className="slider">
                <Link to={`/details/${movie._id}`}>
                  {/* use same height images */}
                  <img src={movie.poster} alt={movie.detailtitle} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <br />
        <div className="main-container-section">
          <h5 className="main-container-section-title">
            Movies
            <i class="fas fa-arrow-right" onClick={()=>history.push('/movies')}></i>
          </h5>
          <Swiper {...setting} freeMode={true}>
            {movie?.map((movie) => (
              <SwiperSlide className="slider">
                <Link to={`/movdetails/${movie._id}`}>
                  {/* use same height images */}
                  <img src={movie.poster} alt={movie.detailtitle} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <br />

        
        <div className="main-container-section">
          <h5 className="main-container-section-title">
            Web Series
            <i class="fas fa-arrow-right" onClick={()=>history.push('/webshow')}></i>
          </h5>
          <Swiper {...setting} freeMode={true}>
            {webshow?.map((movie) => (
              <SwiperSlide className="slider">
                <Link to={`/webshowdetails/${movie._id}`}>
                  {/* use same height images */}
                  <img src={movie.poster} alt={movie.detailtitle} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <br />


        <div className="main-container-section">
          <h5 className="main-container-section-title">
            Tv Shows
            <i class="fas fa-arrow-right" onClick={()=>history.push('/tvshow')}></i>
          </h5>
          <Swiper {...setting} freeMode={true}>
            {tvshow?.map((movie) => (
              <SwiperSlide className="slider">
                <Link to={`/tvshowdetails/${movie._id}`}>
                  {/* use same height images */}
                  <img src={movie.poster} alt={movie.detailtitle} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <br />
  
        
        
      </div>
    </>
  );
};

export default Card;
