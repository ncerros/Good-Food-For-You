import React, { useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";

const Register = ({ setToken }) => {

  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [email, setEmail] = useState();
  const [zipcode, setZipcode] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function registerUser(credentials) {
    return axios.post('/api/user/register', credentials)
      .then(data => {
        // console.log(data)
        // console.log(data.status)
        if (data.status === 201) {
          window.alert('Account successfully created!');
          setSuccess(true);

        } else {
          setError('That email is already registered!');
          // console.log(error);
        }
      })
      .catch(err => setError('That email is already registered!'))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await registerUser({
      fname,
      lname,
      email,
      zipcode,
      password,
    });
    setToken(token)
  };

  return (

    <div className="container">
      <h1 id="heading" className="center-align #388e3c green lighten-1 white-text" style={{ paddingBottom: '12px' }}>Account Registration</h1>
      <div className="row">
        <form className="col s12 #388e3c green darken-2">
          <br></br>
          <div className="row">
            <div className="input-field col s6">
              <label className="active" htmlFor="firstname" style={{ color: 'white', fontSize: '18px' }}>First Name</label>
              <input className="white-text"
                placeholder="Enter First Name"
                type="text"
                name="fname"
                onChange={(e) => { setFName(e.target.value) }}
              />
            </div>
            <div className="input-field col s6">
              <label className="active white-text" htmlFor="firstname" style={{ color: 'white', fontSize: '18px' }}>Last Name</label>
              <input className="white-text"
                placeholder="Enter Last Name"
                type="text"
                name="lname"
                onChange={(e) => { setLName(e.target.value) }}
              />
            </div>
            <div className="input-field col s12">
              <label className="active white-text" htmlFor="email" style={{ color: 'white', fontSize: '18px' }}>Email</label>
              <br></br>
              <input className="white-text"
                placeholder="Enter Email"
                type="text"
                name="email"
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className="input-field col s12">
              <label className="active white-text" htmlFor="zipcode" style={{ color: 'white', fontSize: '18px' }}>Zip Code</label>
              <input className="white-text"
                placeholder="Enter Zip Code"
                type="text"
                name="zipcode"
                onChange={(e) => { setZipcode(e.target.value) }}
              />
            </div>
            <div className="input-field col s12">
              <label className="active white-text" htmlFor="password" style={{ color: 'white', fontSize: '18px' }}>Password</label>
              <br></br>
              <input className="white-text"
                placeholder="Enter Password"
                type="password"
                name="password"
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn #81c784 green lighten-2 z-depth-5" onClick={handleSubmit}>
              Register
            </button>
          </div>
          <br /><br />
        </form>
      </div>
      {error
        ? 
        <div className="row">
          <h5 style={{color: 'red'}}>{error}</h5>
        </div>
        : null
      }
      {success
        ?
        <Redirect to="/login"/>
        : null
      }
    </div>


  );

};

export default Register;
