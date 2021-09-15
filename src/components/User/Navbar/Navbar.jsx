import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getMovBySearch } from "../../../action/movies/Mov";
import Navbrs from "./script";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Navbar = () => {
  const dispatch=useDispatch()
  const query = useQuery();
  const history=useHistory()
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [search, setSearch] = useState("");
  useEffect(() => {
    Navbrs();
  });

  const searchData=(e)=>{
    e.preventDefault()
    if(search.trim()){
      dispatch(getMovBySearch(search))
      history.push(`/search?searchQuery=${search}`)
    }else{
      history.push('/')
    }
  }

  const handleKeyPress=(e)=>{
  
    if(e.KeyCode === 13){
      searchData()
    }
  }
  return (
    <header className="sticky-top" id="navBar">
      <div className="menu-btn">
        <span className="menu-btn_burger"></span>
      </div>
      <nav className="nav">
        <ul className="menu-nav">
          <li className="menu-nav_item">
            <Link to="/" className="menu-nav_item-links">
              Home
            </Link>
          </li>
          <li className="menu-nav_item">
            <Link to="/movies" className="menu-nav_item-links">
              Movies
            </Link>
          </li>
          <li className="menu-nav_item">
            <Link to="/webshow" className="menu-nav_item-links">
              Web Series
            </Link>
          </li>
          <li className="menu-nav_item">
            <Link to="/tvshow" className="menu-nav_item-links">
              Tv Shows
            </Link>
          </li>
          {/* <li className="menu-nav_item">
            <Link to="/animated" className="menu-nav_item-links">
              Animated
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>
            RED<span>FLUK</span>
          </h3>
        </Link>
      </div>
      <div className="search-btn">
        <span className="fa fa-search fa-lg search"></span>
      </div>
      <div className="cancel-btn">
        <span className="fa fa-times fa-lg cancel"></span>
      </div>
      <form action="#" className="form">
        <input
          name="search"
          type="search"
          className="search-data"
          placeholder="Search"
          value={search}
          onKeyPress={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button type="submit" onClick={searchData} className="fas fa-search" />
      </form>
      <form action="#" className="form1">
        <input
          name="search"
          value={search}
          onKeyPress={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="search-data"
          placeholder="Search"
          required
        />
        <button type="submit" onClick={searchData} className="fas fa-search" />
      </form>
    </header>
  );
};

export default Navbar;
