import React from "react";
import {Route, Switch,useLocation ,HashRouter } from "react-router-dom";

import Navbar from "./components/User/Navbar/Navbar";
import Footer from "./components/User/Footer/Footer";
import Home from "./components/User/Home/Home";
import Movies from "./components/User/Movies/Movies";
import TrendingDetail from "./components/User/MovieDetail/MovieDetail";
import Error404 from './components/Error404'

import './stylesheet/css/Usermain.css'
import RegLog from "./components/Admin/Auth/RegLog";
import MovieDetail from "./components/User/Movies/MovieDetail";
import WebDetails from "./components/User/WebSeries/WebDetails";
import WebSeries from "./components/User/WebSeries/WebSeries";
import SearchResult from "./components/User/searchResult/searchResult";

// filter movie
import ActionGenre from "./components/User/Movies/genre/Action";
import Adventure from "./components/User/Movies/genre/Adventure";
import Crime from "./components/User/Movies/genre/Crime";
import Romance from "./components/User/Movies/genre/Romance";
import Thriller from "./components/User/Movies/genre/Thriller";
import SciFI from "./components/User/Movies/genre/SciFi";
import Download from "./components/User/Movies/download";
import TrendDownload from './components/User/MovieDetail/download'

// filter webseires

import webActionGenre from "./components/User/WebSeries/genre/Action"
import webAdvenGenre from "./components/User/WebSeries/genre/Adventure"
import webCrimeGenre from "./components/User/WebSeries/genre/Crime"
import webRomanceGenre from "./components/User/WebSeries/genre/Romance"
import webSciFiGenre from "./components/User/WebSeries/genre/SciFi"
import webThrillerGenre from "./components/User/WebSeries/genre/Thriller"
import Secondary from "./components/User/WebSeries/download/secondary";
import PrimaryWeb from "./components/User/WebSeries/download/download";

// Tv Shows
import TvSeries from "./components/User/TvShow/TvSeries";
import TvDetail from "./components/User/TvShow/TvDetails";
import SecondaryTv from "./components/User/TvShow/download/secondary";
import PrimaryTv from './components/User/TvShow/download/download'

import filterTvAction from './components/User/TvShow/genre/Action'
import filterTvAdven from './components/User/TvShow/genre/Adventure'
import filterTvCrime from './components/User/TvShow/genre/Crime'
import filterTvRomance from './components/User/TvShow/genre/Romance'
import filterTvScifi from './components/User/TvShow/genre/SciFi'
import filterTvThriller from './components/User/TvShow/genre/Thriller'


const UserRoute = () => {
    const {pathname}=useLocation()
    const e=pathname
    const url='/admin'
    const paths = e===`${url}` || e===`${url}/movies` || e===`${url}/webseries` || e===`${url}/tvshow` || e===`${url}/animatedweb` || e===`${url}/animated`  || e===`${url}/trending` || e===`${url}/download`
    const Auths= e===`${url}/signin` || e===`${url}/signup` || e=== `${url}/pass`
    const Expaths= e===`${url}/mobtrailer`
    console.log(pathname)
  return (
    <HashRouter>
      {(paths || Auths || Expaths ? null : <Navbar />)}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/search' component={SearchResult} />
        {/* movies */}
        <Route path='/movdetails/:id' component={MovieDetail} />
        <Route exact path="/movies" component={Movies} />
        <Route path='/movie/genre/action' component={ActionGenre} />
        <Route path='/movie/genre/adventure' component={Adventure} />
        <Route path='/movie/genre/crime' component={Crime} />
        <Route path='/movie/genre/romance' component={Romance} />
        <Route path='/movie/genre/thriller' component={Thriller} />
        <Route path='/movie/genre/scifi' component={SciFI} />
        <Route path='/download/movies/:id' component={Download} />
        
        <Route path='/download/trendmovies/:id' component={TrendDownload} />
        <Route path="/details/:id" component={TrendingDetail} />

        {/* webseries */}
        <Route exact path="/webshow" component={WebSeries} />
        <Route path='/webshowdetails/:id' component={WebDetails} />
        <Route path='/webshows/genre/action' component={webActionGenre} />
        <Route path='/webshows/genre/adventure' component={webAdvenGenre} />
        <Route path='/webshows/genre/crime' component={webCrimeGenre} />
        <Route path='/webshows/genre/romance' component={webRomanceGenre} />
        <Route path='/webshows/genre/scifi' component={webSciFiGenre} />
        <Route path='/webshows/genre/thriller' component={webThrillerGenre} />
        <Route path='/secondary/download/webshow/:id' component={Secondary} />
        <Route path='/download/webshow/:id' component={PrimaryWeb} />

        {/* TvShow */}
        <Route exact path='/tvshow' component={TvSeries} />
        <Route path='/tvshowdetails/:id' component={TvDetail} />
        <Route path='/tvshows/genre/action' component={filterTvAction} />
        <Route path='/tvshows/genre/adventure' component={filterTvAdven} />
        <Route path='/tvshows/genre/crime' component={filterTvCrime} />
        <Route path='/tvshows/genre/romance' component={filterTvRomance} />
        <Route path='/tvshows/genre/scifi' component={filterTvScifi} />
        <Route path='/tvshows/genre/thriller' component={filterTvThriller} />
        <Route path='/secondary/download/tvshow/:id' component={SecondaryTv} />
        <Route path='/download/tvshow/:id' component={PrimaryTv} />

        {/* Animated  */}
        {/* <Route path='/animated' component={AnimeMovie} /> */}
        
        <Route path='/pass' component={RegLog} />
        {(paths || Auths || Expaths ? null : <Route component={Error404} />)}
      </Switch>
      {(paths || Auths || Expaths ? null : <Footer />)}
    </HashRouter>
  );
};

export default UserRoute;
