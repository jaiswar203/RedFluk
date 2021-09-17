import { HashRouter, Route} from 'react-router-dom';
import { fetchSlider,fetchTrailer,fetchLastSlider, fetchLastTrailer } from './action/Trailer';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';

import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import { getMovies } from './action/Movies';
import { getAllMov } from './action/movies/Mov';
import { getAllWebShow, getWebShow } from './action/movies/WebShow';
import { getAllTvShow, getTvShow } from './action/movies/TvShow';
import { getAllAnimeMovie, getAnimeMovie } from './action/movies/animated/Mov';
import { getAllAnimeSeries, getAnimeSeries } from './action/movies/animated/WebShow';

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchSlider())
    dispatch(fetchTrailer())
    dispatch(fetchLastSlider())
    dispatch(fetchLastTrailer())
    dispatch(getMovies())
    dispatch(getAllMov())
    dispatch(getWebShow())
    dispatch(getAllWebShow())
    dispatch(getTvShow())
    dispatch(getAllTvShow())
    dispatch(getAllAnimeMovie())
    dispatch(getAllAnimeSeries())
    dispatch(getAnimeMovie())
    dispatch(getAnimeSeries())
  },[dispatch])
  return (
    <HashRouter> 
      {/* we use switch in this thats why we getting only one route at time */}
        <Route  path='/' component={UserRoute} />
        <Route  path='/admin' component={AdminRoute} />
    </HashRouter>
  );
};

export default App;
