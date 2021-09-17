import React from "react";
import { Route, Switch, useRouteMatch, useLocation, Redirect ,HashRouter} from "react-router-dom";
import Admin from "./components/Admin/Home/Admin";
import AdminNav from "./components/Admin/Navbar/Navbar";
import AdminLog from "./components/Admin/Auth/AdminLog";
import AdminReg from "./components/Admin/Auth/AdminReg";

// StyleSheet
import "./stylesheet/css/Adminmain.css";
import RegLog from "./components/Admin/Auth/RegLog";

import AdminMovies from "./components/Admin/AdminMovies/Trending/AdminMovies";
import AdminMovie from "./components/Admin/AdminMovies/movies/AdminMovies";
import AdminWebSeries from "./components/Admin/AdminMovies/webseries/AdminMovies";
import AdminTvShow from "./components/Admin/AdminMovies/tvShow/AdminMovies";

const AdminRoute = () => {
  const user = JSON.parse(localStorage.getItem("Adminprofile"))
  const supAd = JSON.parse(localStorage.getItem('SupAd'))
  
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  
  const notshow = pathname === "/admin/signin" || pathname === "/admin/signup" || pathname==="/admin/pass";
  return (
    <HashRouter>
      {user ? (
        <>
          {notshow ? null : <AdminNav />}
        <Switch>
          <Route exact path={`${path}`} component={Admin} />
          <Route path={`${path}/trending`} component={AdminMovies} />
          <Route path={`${path}/movies`} component={AdminMovie} />
          <Route path={`${path}/webseries`} component={AdminWebSeries} />
          <Route path={`${path}/tvshow`} component={AdminTvShow} />
        </Switch>
        </>
      ) : (notshow ? null : <Redirect to='/' /> ) }
      
      <Route path={`${path}/pass`} component={RegLog} /> 
      <Route path={`${path}/signin`} component={AdminLog} />
      
      <Route path={`${path}/signup`}>
        { supAd ? <AdminReg /> : <Redirect to='/' />} 
      </Route>
    </HashRouter>
  );
};

export default AdminRoute;
