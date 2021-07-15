import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../components/Slider";

const Home = (props) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await axios.get("/api/auth", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setUser(res.data);
  };
  
  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }
  return (
    <div className="m-5">
      <div className="jumbotron">
        <p className="center-align h2">Welcome {user && user.fname}</p>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
      <Slider />
    </div>
    
  );
};

export default Home;
