import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch, useLocation, Redirect, BrowserRouter } from "react-router-dom";
import Admin from "./components/Admin/Home/Admin";
import AdminNav from "./components/Admin/Navbar/Navbar";
import AdminLog from "./components/Admin/Auth/AdminLog";
import AdminReg from "./components/Admin/Auth/AdminReg";
import { useDispatch } from "react-redux";
// StyleSheet
import "./stylesheet/css/Adminmain.css";
import RegLog from "./components/Admin/Auth/RegLog";

import AdminMovies from "./components/Admin/AdminMovies/Trending/AdminMovies";
import AdminMovie from "./components/Admin/AdminMovies/movies/AdminMovies";
import AdminWebSeries from "./components/Admin/AdminMovies/webseries/AdminMovies";
import AdminTvShow from "./components/Admin/AdminMovies/tvShow/AdminMovies";

// import AdminAnimatedSeries from './components/Admin/AdminMovies/animated/WebShow/AdminMovies'
// import AdminAnimatedMovie from './components/Admin/AdminMovies/animated/Movies/AdminMovies'

const AdminRoute = () => {
  const user = JSON.parse(localStorage.getItem("Adminprofile"))
  const supAd = JSON.parse(localStorage.getItem('SupAd'))
  
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  
  const notshow = pathname === "/admin/signin" || pathname === "/admin/signup" || pathname==="/admin/pass";

  // useEffect(()=>{
    
  // },[dispatch])
  
  return (
    <BrowserRouter>
      {user ? (
        <>
          {notshow ? null : <AdminNav />}
        <Switch>
          <Route exact path={`${path}`} component={Admin} />
          <Route path={`${path}/trending`} component={AdminMovies} />
          <Route path={`${path}/movies`} component={AdminMovie} />
          <Route path={`${path}/webseries`} component={AdminWebSeries} />
          <Route path={`${path}/tvshow`} component={AdminTvShow} />
          {/* <Route path={`${path}/animated`} component={AdminAnimatedMovie} /> */}
          {/* <Route path={`${path}/animatedweb`} component={AdminAnimatedSeries} /> */}
        </Switch>
        </>
      ) : (notshow ? null : <Redirect to='/' /> ) }
      
      <Route path={`${path}/pass`} component={RegLog} /> 
      <Route path={`${path}/signin`} component={AdminLog} />
      
      <Route path={`${path}/signup`}>
        { supAd ? <AdminReg /> : <Redirect to='/' />} 
      </Route>
    </BrowserRouter>
  );
};

export default AdminRoute;
