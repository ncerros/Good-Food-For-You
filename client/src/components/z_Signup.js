import React from "react";


function SignUp() {
  return (
      <div className="container">
          <h1 id="heading" className="center-align #81c784 green lighten-2 white-text">Registration Form</h1>
          <div className="row">
              <form className="col s12 #212121 grey darken-1">
                  <br></br>
                  <div className="row">

                  <div className="input-field col s-6">
                          <input type="text"></input>
                          <label className="active" for="firstname">FirstName</label>
                      </div>
                   <div className="input-field col s-6">
                          <input type="text"></input>
                          <label className="active" for="firstname">LastName</label>
                      </div>
                      <div className="input-field col s12">
                          <input type="text"></input>
                          <label className="active" for="email">Email</label>
                      </div>
                      <div className="input-field col s12">
                          <input type="text"></input>
                          <label className="active" for="zipcode">Zipcode</label>
                      </div>
                      <div className="input-field col s12">
                          <input type="text"></input>
                          <label className="active" for="password">Password</label>
                      </div>
                      <button className="btn #81c784 green lighten-2 z-depth-5">SignUp</button>
                
                  </div>

              </form>
          </div>


      </div>

  )
}  
export default SignUp;