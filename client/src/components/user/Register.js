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
        "/api/user/register",
        { fname, lname, email, zipcode, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      props.history.push("/login");
      window.location.href="/";
     
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
  };

  return (

      <div className="container">
          <h1 id="heading" className="center-align #388e3c green darken-2 white-text">Account Registration</h1>
          <div className="row">
              <form className="col s12 #388e3c green darken-2">
                  <br></br>
                  <div className="row">

                    <div className="input-field col s6">
                        <label className="active" htmlFor="firstname">First Name</label>
                        <input className="white-text"
                          placeholder="Enter First Name" 
                          type="text"
                          name="fname"
                          value={fname}
                          onChange={handleChange}
                        />
                        
                    </div>

                    <div className="input-field col s6">
                    <label className="active white-text" htmlFor="firstname">Last Name</label>
                        <input className="white-text"
                          placeholder="Enter Last Name" 
                          type="text"
                          name="lname"
                          value={lname}
                          onChange={handleChange}
                        />
                        
                    </div>

                    <div className="input-field col s12">
                    <label className="active white-text" htmlFor="email">Email</label>
                    <br></br>
                        <input className="white-text"
                          placeholder="Enter Email" 
                          type="text"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                    </div>

                    <div className="input-field col s12">
                        <label className="active white-text" htmlFor="zipcode">Zip Code</label>
                        <input className="white-text"
                          placeholder="Enter Zip Code" 
                          type="text"
                          name="zipcode"
                          value={zipcode}
                          onChange={handleChange}
                        />
                    </div>

                    <div className="input-field col s12">
                        <label className="active white-text" htmlFor="password">Password</label>
                        <br></br>
                        <input className="white-text"
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
