import React, { useState } from "react";


function SignUp() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [pass, setPass] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      zip,
      pass,
    }
  }

  return (
      <div className="container">
          <h1 id="heading" className="center-align #81c784 green lighten-2 white-text">Registration Form</h1>
          <div className="row">
              <form className="col s12 #212121 grey darken-1">
                  <br></br>
                  <div className="row">

                  <div className="input-field col s-6">
                          <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            ></input>
                          <label className="active">FirstName</label>
                      </div>
                   <div className="input-field col s-6">
                          <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            ></input>
                          <label className="active">LastName</label>
                      </div>
                      <div className="input-field col s12">
                          <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            ></input>
                          <label className="active">Email</label>
                      </div>
                      <div className="input-field col s12">
                          <input
                            type="text"
                            onChange={(e) => setZip(e.target.value)}
                            ></input>
                          <label className="active">Zipcode</label>
                      </div>
                      <div className="input-field col s12">
                          <input
                            type="text"
                            onChange={(e) => setPass(e.target.value)}
                            ></input>
                          <label className="active">Password</label>
                          <button
                            className="btn #81c784 green lighten-2 z-depth-5"
                            onClick={(e) => onFormSubmit(e)}
                            >SignUp</button>
                      
                      </div>
                      
                
                  </div>

              </form>
          </div>


      </div>

  )
}  
export default SignUp;