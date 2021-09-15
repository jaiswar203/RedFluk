import React, { useEffect } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Movies from "./movies";
import Trend from "./trend";
import WebShow from "./WebShow";
import TvShow from "./tvshow";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResult = () => {
  const { movies, trend,webshow,tvshow } = useSelector((state) => state.search);
  
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");

  if (!searchQuery) {
    history.push("/");
  }
  useEffect(() => {}, [movies, trend]);
  return (
    <>
      {movies?.length !== 0 ? <Movies movies={movies} /> : null}
      {trend?.length !== 0 ? <Trend trend={trend} /> : null}
      {webshow?.length !== 0 ? <WebShow webshow={webshow} /> : null}
      {tvshow?.length !==0 ? <TvShow tvshow={tvshow} /> : null }
    </>
  );
};

export default SearchResult;
