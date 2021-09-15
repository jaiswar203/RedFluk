import { combineReducers } from "redux";
import authRedu from "./Admin";
import movies from './movies'
import trailer from './Trailer/Trailer'
import Slider from "./Trailer/Slider";
import fetchLastSlider from "./Trailer/fetchLastSlider";
import fetchLastTrailer from "./Trailer/fetchLastTrailer";
import detail from "./detail";
import mov from './movies/movies'
import search from "./search/search";
import filterMovie from './filter/movies'
import filterWebShow from './filter/webshow'
import WebShow from "./movies/WebShow";
import tvshow from './movies/tvShow'
import filterTvShow from "./filter/tvshow";
import animatedMovie from './movies/animated/movies'
import animatedWebshow from './movies/animated/webshow'

export default combineReducers(
        {
            authRedu,trailer,slider:Slider,lastSlider:fetchLastSlider ,lastTrailer: fetchLastTrailer,movies,detail,mov,search
            ,filterMovie,filterWebShow,webshow:WebShow,tvshow,
            filterTvShow,animatedMovie,animatedWebshow
        }
    )