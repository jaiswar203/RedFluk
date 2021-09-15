import React, { useEffect, useState } from "react";
import Breadcrump from "../..//../Home/Breadcrump";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Cards from "./Cards";
import List from "./List";
import AdminMovie from "../../script";

const AdminMovies = () => {
  const [omdbData, setOmdbData] = useState("");
  const [datas, setDatas] = useState({});
  const dispatch = useDispatch();
  const [switchs, setSwitchs] = useState(false)
  const [currentId, setCurrentId] = useState(null)
  
  const getMovies = async (omdb) => {
    const url = `http://www.omdbapi.com/?i=${omdb}&apikey=8bfd72e1`;
    const res = await axios.get(url);
    const resData = await res.data;
    setDatas(resData);
  };
  
  useEffect(() => {
    AdminMovie()
  }, [datas,currentId])

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(omdbData);
  };

  const Changes=()=>{
    setSwitchs(!switchs)
  }
  return (
    <>
    <br />
    <br />
    <br />
      <Breadcrump />

      <div className="omdbData">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setOmdbData(e.target.value)}
            placeholder="imdb key"
          />
          <button type="submit">Click</button>
        </form>
      </div>
      <div className="toggle-container">
          <div className="toggle-btn" style={{marginTop:'15rem'}} onClick={Changes}>
            <div className="inner-circle"></div>
          </div>
        </div>

      {!switchs ? (
      <div className="admin-movies-card">
        <Cards data={datas} setData={setDatas} setCurrentId={setCurrentId} currentId={currentId} />
      </div>
      ):(
      <div className="movies-list" style={{marginTop:'3rem'}}>
        <List setCurrentId={setCurrentId} />
      </div>
      )}

    </>
  );
};

export default AdminMovies;
