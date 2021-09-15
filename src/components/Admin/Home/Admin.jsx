import React, { useEffect, useState } from "react";
import { Link,useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminHome from "./script";
import Breadcrump from "./Breadcrump";
import Upload from "./Upload";
import List from "./List";
import MobUpload from "./MobUpload/MobUpload";
import MobList from "./MobUpload/MobList";

const Admin = () => {
  const [switchs, setSwitchs] = useState(false);
  const [sliderId, setSliderId] = useState(null)
  const [trailerId, setTrailerId] = useState(null)
  const trailer=useSelector((state)=> trailerId ? state.trailer.find((d)=>d._id===trailerId) : null )
  useEffect(() => {
    AdminHome()
    
  },[trailerId,sliderId]);
  const { url } = useRouteMatch();
  const Changes = () => {
    setSwitchs(!switchs);
  };
  return (
    <>
      <div className="home-admin">
        <div className="home-admin-breadcrump">
          <Breadcrump />
        </div>
        <div className="toggle-container">
          <div className="toggle-btn" onClick={Changes}>
            <div className="inner-circle"></div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div id="myDropdown" className="dropdown-content">
            <Link to={`${url}`}>Home</Link>
            <Link to={`${url}/mobtrailer`}>Mob Trailer</Link>
            <Link to={`${url}/pctrailer`}>Pc Trailer</Link>
            <Link to={`${url}/cards`}>Cards</Link>
          </div>
        </div>
        <div className="home-admin-form">
          {!switchs ? (
            <>
              
              <MobUpload sliderId={sliderId} setSliderId={setSliderId} />
              <MobList sliderId={sliderId} setSliderId={setSliderId} />
            </>
          ) : (
            <>
              
              <Upload trailerId={trailerId} setTrailerId={setTrailerId} />
              <List trailerId={trailerId} setTrailerId={setTrailerId} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
