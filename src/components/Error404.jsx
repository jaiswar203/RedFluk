import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  
  return (
    <>
      <div className="error" style={{display:'flex' ,justifyContent:'center',alignItems:'center',height:'50vw',flexDirection:'column'}}> 
        <h1>Error 404 not found</h1>
        <a href='/' style={{color:'red'}}>Get back to Home</a>
      </div>
    </>
  );
};

export default Error404;
