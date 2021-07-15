import React, { useState } from "react";
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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
  };

  return (

<div className="container">
          <h1 id="heading" className="center-align #81c784 green lighten-2 white-text">Account Registration</h1>
          <div className="row">
              <form className="col s12 #212121 grey darken-1">
                  <br></br>
                  <div className="row">

                    <div className="input-field col s6">
                        <label className="active" for="firstname">First Name</label>
                        <input 
                          placeholder="Enter First Name" 
                          type="text"
                          name="fname"
                          value={fname}
                          onChange={handleChange}
                        />
                        
                    </div>

                    <div className="input-field col s6">
                    <label className="active" for="firstname">Last Name</label>
                        <input 
                          placeholder="Enter Last Name" 
                          type="text"
                          name="lname"
                          value={lname}
                          onChange={handleChange}
                        />
                        
                    </div>

                    <div className="input-field col s12">
                    <label className="active" for="email">Email</label>
                        <input 
                          placeholder="Enter Email" 
                          type="text"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                    </div>

                    <div className="input-field col s12">
                        <label className="active" for="zipcode">Zip Code</label>
                        <input 
                          placeholder="Enter Zip Code" 
                          type="text"
                          name="zipcode"
                          value={zipcode}
                          onChange={handleChange}
                        />
                    </div>

                    <div className="input-field col s12">
                        <label className="active" for="password">Password</label>
                        <input 
                          placeholder="Enter Password" 
                          type="password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                        />
                    </div>

                  </div>

                  {error ? <p className="text-danger">{error}</p> : null}
                  <div className="text-center">
                    <button className="btn #81c784 green lighten-2 z-depth-5" onClick={handleSubmit}>
                    Register
                  </button>
                  </div>
                  <br/><br/>
              </form>
          </div>
      </div>



    
  );

};

export default Register;

{/* <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <h4 className="text-muted text-center mb-5">Create an Account</h4>

        <div className="card p-5 shadow">
          <form>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
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
                type="text"
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
          </form>
        </div>
      </div>
      <div className="col-sm-2" />
    </div> */}