import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router";


const Login = ({ setToken, setUserName }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });
  const [success, setSuccess] = useState(false);
  const { email, password, error } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setData({ ...data, error: null });
    axios.post(
      "/api/user/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(res => {
      // console.log(res)
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUserName(res.data.user.fname)
      window.location.href="/"
      // setSuccess(true);
    })
    .catch(err => {
      // console.log(err)
      setData({ ...data, error: err.response.data.error });
    })
  };

  return (
    <div className="container">

      <div className="col s6 #66bb6a green lighten-1">
        <h4 className="center-align white-text" style={{ paddingTop: '6px' }}>Account Login</h4>
        <div className="card shadow" style={{ padding: '16px' }}>
          <form>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                className="form-control green-text"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                className="form-#388e3c green-text"
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
            </div>
          </form>
        </div>
      </div>
    {success
      ? <Redirect to="/"/>
      : null}
    </div>
  )
};

export default Login;
