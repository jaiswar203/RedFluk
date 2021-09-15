import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Carousels from './script'

const Carousel = ({data}) => {
  const sliderData=useSelector((state)=>state.slider)
  useEffect(() => {
   Carousels()
  }, [])
  return (
    <>
        <section className="home" id='home'>
          <video
            className="home-video"
            id='carousel_video'
            poster={data.poster}
            muted
            autoPlay
          >
            <source src={data.trailer} />
          </video>
          <button className="mute">
            <i class="fas fa-volume-up"></i>
          </button>
          <button className="unmute">
            <i class="fas fa-volume-mute"></i>
          </button>
          <button className="replay">
            <i class="fas fa-redo"></i>
          </button>
          <div className="home-content">
            <h1>{data.title}</h1>
            <p className="home-para">
              {data.description}
            </p>
            <Link className="home-content-link" to={`/details/${data._id}`}>
              {" "}
              <i class="fas fa-download"></i> Download
            </Link>
            <Link className="home-content-link">
              {" "}
              <i class="fas fa-info-circle"></i> About
            </Link>
          </div>
        </section>

        {/* size should of 1280 x 720 */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          >
          {sliderData.map((data,i)=> i===0 ? (
            
            <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={data.carousel1} className="d-block w-100" alt="..." />
              <Link className="carousel-link"><i className="fas fa-download"></i></Link>
            </div>
            <div className="carousel-item">
              <img src={data.carousel2} className="d-block w-100" alt="..." />
              <Link className="carousel-link"><i className="fas fa-download"></i></Link>
            </div>
            <div className="carousel-item">
              <img src={data.carousel3} className="d-block w-100" alt="..." />
              <Link className="carousel-link"><i className="fas fa-download"></i></Link>
            </div>
          </div>
            ) : null)}
        </div>
      </>
    );
}


export default Carousel

