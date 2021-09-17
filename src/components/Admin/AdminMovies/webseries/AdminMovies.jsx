import React, { useEffect, useState } from "react";
import Breadcrump from "../../Home/Breadcrump";
import axios from "axios";
import Cards from "./Cards";
import List from "./List";
import AdminMovie from "../script";

const AdminWebSeries = () => {
  const [omdbData, setOmdbData] = useState("");
  const [datas, setDatas] = useState({});
  const [switchs, setSwitchs] = useState(false)
  const [currentId, setCurrentId] = useState(null)
  const [show, setShow] = useState(false)
  const [response, setResponse] = useState(false)

  const getMovies = async (omdb) => {
    const url = `https://www.omdbapi.com/?i=${omdb}&apikey=8bfd72e1`;
    const res = await axios.get(url);
    const resData = await res.data;
    setDatas(resData);
  };

  useEffect(() => {
    AdminMovie()
    if (datas?.Response === 'False') {
      setResponse(!response)
    }
  }, [datas, currentId,response])

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(omdbData);
    setShow(true)
    setResponse(true)
  };

  const Changes = () => {
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
        <div className="toggle-btn" style={{ marginTop: '15rem' }} onClick={Changes}>
          <div className="inner-circle"></div>
        </div>
      </div>

      {show && response ? (
        <div className="data-name" style={{ padding: '1rem' }}>
          {datas !== null ? (
            <>
              {Object?.keys(datas)?.length !== 0 && datas?.Response === 'True' ? <h4> data fetched</h4> : <h4> No data Fetched</h4>}
            </>
          ) : 'No Data Fetched'}
        </div>
      ) : null}

      {!response && show ? <h5>Wrong Id</h5> : null}

      {!switchs ? (
        <div className="admin-movies-card">
          <Cards data={datas} setData={setDatas} setCurrentId={setCurrentId} currentId={currentId} />
        </div>
      ) : (
        <div className="movies-list" style={{ marginTop: '3rem' }}>
          <List setCurrentId={setCurrentId} />
        </div>
      )}

    </>
  );
};

export default AdminWebSeries;
