import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = (props) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    zipcode: "",
    password: "",
    error: null,
  });

  const { fname, lname, email, zipcode, password, error } = data;

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setData({ ...data, error: null });
      await axios.post(
        "/api/auth/register",
        { fname, lname, email, zipcode, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      props.history.push("/login");
    } catch (error) {
      setData({ ...data, error: error.response.data.error });
    }
  };

  return (
    <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <h4 className="text-muted text-center mb-5">Get a Good Foods Account</h4>

        <div className="card p-5 shadow">
          <form>
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input
                className="form-control"
                type="name"
                name="fname"
                value={fname}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Last Name</label>
              <input
                className="form-control"
                type="name"
                name="lname"
                value={lname}
                onChange={handleChange}
              />
            </div>
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
              <label htmlFor="zipcode">Zip Code</label>
              <input
                className="form-control"
                type="password"
                name="zipcode"
                value={zipcode}
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
            {error ? <p className="text-danger">{error}</p> : null}
            <div className="text-center">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Register
              </button>
            </div>
             {/* <p className="mt-3 text-center>User Already Registered <Link to="/login"></Link></p> */}
          </form>
        </div>
      </div>
      <div className="col-sm-2" />
    </div>
  );
};

export default Register;