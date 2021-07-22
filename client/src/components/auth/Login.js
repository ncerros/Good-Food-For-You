import axios from "axios";
import React, { useState } from "react";
import Slider from "../Slider";


const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });

  const { email, password, error } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setData({ ...data, error: null });
      const res = await axios.post(
        "/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", res.data.token);
      // props.history.push("/");
      window.location.href="/"
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
  };

  return (

    <div className="row">
    <br/>
      <div className="col s3 " />
      <div className="col s6 hoverable #66bb6a green lighten-1">
        <h4 className="center-align m5 ">Account Login</h4>
        <div className="card p-5 shadow">

          <form>
            <div className="input-field col s6">
              <label htmlFor="email">Email</label>
              <input
                className="form-control "
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field col s6">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            {error ? <p className="text-danger">{error}</p> : null}
            <div className="text-center">
              <button className="btn #66bb6a green lighten-1" onClick={handleSubmit}>

                Login
              </button>
              <br/><br/>
            </div>
          </form>
        </div>
      </div>
      <div className="col s2" />
      <Slider />
      </div>
    
    
  );
};

export default Login;
