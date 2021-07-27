import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../components/Slider";

const Home = ({ userName }) => {
  // const [user, setUser] = useState(null);

 
  
  // useEffect(() => {
  //   // if (localStorage.getItem("token")) {
  //   //   // props.history.push("/home");
  //   //   window.location.href="/login";
     
  //   // }
  // }, []);

  // // const logout = () => {
  // //   localStorage.removeItem("token");
  // //   props.history.push("/login");
  // // };

  
  
  return (
    <div className="#a5d6a7 green lighten-3">
      <div className="jumbotron">
        <p className="center-align white-text">Welcome {userName}</p>
      </div>
      <Slider />
    </div>
    
  );
};

export default Home;
