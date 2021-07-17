/**** Login.js      *******/
import axios from "axios";
import React, { useState } from "react";
//import { Link} from "react-router-dom";
//import { Col, Row, Container } from "../Grid"

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });

  const { email, password, error } = data;

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      props.history.push("/");
    } catch (error) {
      setData({ ...data, error: error.response.data.error });
    }
  };

  return (
    
      <div>
        <div>
          <h4 className="">Sign in</h4>
          
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              {error ? <p className="">{error}</p> : null}
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Login
                </button>
              </div>
              
            </form>
        </div>
        </div>

    
  );
};

export default Login;