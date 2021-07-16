import React from "react";

/*eslint-disable */
function Profile() {
    return (

        <div>
            <nav>
                <div className="nav-wrapper #81c784 green lighten-2">
                    <a href="#" className="brand-logo left">GoodFood</a>
                    
                    <ul id="nav-mobile" class="right">
                        <li><a href="#" className="waves-effect waves-light btn #66bb6a green lighten-1">Product</a></li>
                        <li><a href="#" className="waves-effect waves-light btn #66bb6a green lighten-1">List</a></li>
                        <li><a href="#" className="waves-effect waves-light btn #66bb6a green lighten-1">Logout</a></li>
                    </ul>
                </div> 
             </nav> 
             <br></br>
             <br></br>

        <div className="container">
          <h1 id="heading" className="center-align #81c784 green lighten-2 white-text">Profile</h1>
            
                <form className="col s8 #212121 grey darken-1 white-text">
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
                        <div className="input-field col s8">
                            <input type="text"></input>
                            <label className="active" for="email">Email</label>
                        </div>
                        
                        <div className="input-field col s8">
                            <input type="text"></input>
                            <label className="active" for="password">Password</label>
                        </div>
                        <div className="input-field col s8">
                            <input type="text"></input>
                            <label className="active" for="Enter Location">Enter Zipcode</label>
                            <button className="btn #81c784 green lighten-2 z-depth-5">Search</button>
                            <div>

                            </div>
                        </div>
                  
                    </div>
  
                </form>
            
            <br></br>
            
  
        </div>

        </div>
    )
  }  
  export default Profile;