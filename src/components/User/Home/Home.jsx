import React from "react";
import Carousel from "./Carousel/Carousel";
import Card from "./Cards/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const trailerData=useSelector((state)=>state.trailer)
  const movieData=useSelector((state)=>state)
  return (
    <>
    {trailerData.map((data,i)=>i===0 ? (
      <Carousel data={data} key={data._id} />
    ): null)}
      <main className="main">

          <Card  />
        
      </main>
    </>
  );
};

export default Home;
