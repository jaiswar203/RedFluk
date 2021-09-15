import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminNav from "./script";
import decode from 'jwt-decode'

const Navbar = () => {
  function openSideNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("admin-main").style.marginLeft = "250px";
  }
  function closeSideNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("admin-main").style.marginLeft = "0";
  }
  const dispatch = useDispatch();
  const history = useHistory();
  const location=useLocation()
  const { url } = useRouteMatch();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("Adminprofile"))
    );

    const logout = () => {
    dispatch({ type: "LOGOUT" });
    
    history.push("/admin/signin");
    
    setUser(null);
  };
  useEffect(() => {
    AdminNav();
    
    const token=user?.token

    if(token){
      const decodedToken=decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()

      // setUser(JSON.parse(localStorage.getItem('profile')))
    }
  }, [location]);


  return (
    <>
      {/* for larger devices */}
      <div className="admin-Sidenav" id="mySidenav">
        <a className="fas fa-times closebtn" onClick={closeSideNav}></a>
        <Link to={`${url}`} className="admin-SideNav-link">
          Main
        </Link>
        <Link to={`${url}/trending`} className="admin-SideNav-link">
          Trending
        </Link>
        <Link to={`${url}/movies`} className="admin-SideNav-link">
          Movies
        </Link>
        <Link to={`${url}/webseries`} className="admin-SideNav-link">
          Web Series
        </Link>
        <Link to={`${url}/tvshow`} className="admin-SideNav-link">
          Tv Shows
        </Link>
        {/* <Link to={`${url}/animated`} className="admin-SideNav-link">
          Animated Movie
        </Link>
        <Link to={`${url}/animatedweb`} className="admin-SideNav-link">
          Animated Show
        </Link> */}
        {/* <Link to={ `${url}/signin`}>
          { user ? history.push('/admin') : history.push('/admin/signin')}
        </Link> */}
      </div>
      <header id="admin-main" className="admin-header">
        <div className="admin-btn" onClick={openSideNav}>
          <span className="admin-btn-burger"></span>
        </div>
        <div className="admin-cancelbtn">
          <i class="fas fa-times"></i>
        </div>
        <nav className="admin-nav">
          <div className="admin-nav-user-detail">
            <h5>{user.result ? user.result.name : "Name"}</h5>
          </div>
          <div className="admin-nav-userid" onClick={logout}>
            <i class="fas fa-sign-out-alt"></i>
          </div>
        </nav>
      </header>
      {/* for mobiles */}
      <div className="header" id="admin">
        <div className="admin-menu-btn">
          <span className="admin-menu-btn_burger"></span>
        </div>

        <div className="mob-signout" onClick={logout}>
        <i class="fas fa-sign-out-alt"></i>
        </div>
        <div className="mob-admin">
          <ul className="mob-admin-nav">
            <li className="mob-admin-nav-item">
              <Link className="mob-admin-nav-item-links" to={`${url}`}>
                Home
              </Link>
            </li>
            <li>

              <Link className="mob-admin-nav-item-links" to={`${url}/trending`}>
                Trending
              </Link>
              
            </li>
            <li>

              <Link className="mob-admin-nav-item-links" to={`${url}/movies`}>
                Movies
              </Link>
              
            </li>
            <li>
              
              <Link className="mob-admin-nav-item-links" to={`${url}/webseries`}>
                Web Series 
              </Link>
            </li>
            <li>

              <Link className="mob-admin-nav-item-links" to={`${url}/tvshows`}>
                Tv Shows 
              </Link>
            </li>
            <li>

              <Link className="mob-admin-nav-item-links" to={`${url}/animated`}>
                Animated
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
