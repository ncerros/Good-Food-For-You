import React, { useEffect } from 'react';
import API from "../../utils/API";
import M from "materialize-css";

function Nav () {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  
  useEffect(() => {
    API.getCurrentUser().then(results => {
      console.log(results.data)
  
    })
  },)

  const logout = (props) => {
    localStorage.removeItem("token");
    props.history.push("/");
    
  };

    return (
      <div className="#a5d6a7 green lighten-3">
        <nav className="#1b5e20 green darken-4">
          <div className="nav-wrapper #1b5e20 green darken-4 container">
            <a href="/" className="brand-logo right">Good Foods</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down container">
              {!localStorage.getItem("token") ? 
                <>

                  <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1">LOGIN</a></li>
                  <li><a href="/register" className="waves-effect waves-light btn #66bb6a green lighten-1">REGISTER</a></li>
                  <li><a href="/about" className="waves-effect waves-light btn #66bb6a green lighten-1">ABOUT US</a></li>
                </> 
              : 
                <>
                  <li><a href="/generate" className="waves-effect waves-light btn #66bb6a green lighten-1">Meal Plan</a></li>
                  <li><a href="/grocery" className="waves-effect waves-light btn #66bb6a green lighten-1">Make Grocery List</a></li>
                  <li><a href="/savedgrocery" className="waves-effect waves-light btn #66bb6a green lighten-1">View Grocery List</a></li>
                  <li><a href="/product" className="waves-effect waves-light btn #66bb6a green lighten-1">PRODUCT SEARCH</a></li>
                  <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1" onClick={logout}>LOG OUT</a></li>
                
                </>
              }
                         
            </ul>
            {!localStorage.getItem("token") ? 
            <>
            <ul class="sidenav" id="mobile-demo">
              <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1">LOGIN</a></li>
              <li><a href="/register" className="waves-effect waves-light btn #66bb6a green lighten-1">REGISTER</a></li>
              <li><a href="/about" className="waves-effect waves-light btn #66bb6a green lighten-1">ABOUT US</a></li>
            </ul>
            </>
            :
            <>
            <ul class="sidenav" id="mobile-demo">
              <li><a href="/generate" className="waves-effect waves-light btn #66bb6a green lighten-1">Meal Plan</a></li>
              <li><a href="/grocery" className="waves-effect waves-light btn #66bb6a green lighten-1">Make Grocery List</a></li>
              <li><a href="/savedgrocery" className="waves-effect waves-light btn #66bb6a green lighten-1">View Grocery List</a></li>
              <li><a href="/product" className="waves-effect waves-light btn #66bb6a green lighten-1">PRODUCT SEARCH</a></li>
              <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1" onClick={logout}>LOG OUT</a></li>
            </ul>
            </>
            }
          </div>
            
        </nav>
        
      </div>
    )
}


export default Nav;
