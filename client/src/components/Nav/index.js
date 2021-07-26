import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import M from "materialize-css";
import { Redirect } from 'react-router';

function Nav({ isToken }) {

  const [shouldRedirect, setShouldRedirect] = useState(false);
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.init(elems, {
      edge: 'right',
    });

    // instance.addEventListener('click', () => {
    //   instance.open()
    // })

    // API.getCurrentUser().then(results => {
    //   console.log(results.data)

    // })
  })
  
  const logout = (props) => {
    localStorage.removeItem("token");
    // props.history.push("/");
    setShouldRedirect(true);

  };

  return (
    <div>
      <nav className="#1b5e20 green darken-4" role="navigation" style={{ height: '64px', lineHeight: '64px' }}>
        <a href="/" className="" style={{ position: 'absolute', left: '12px', fontSize: '28px' }}>Good Foods</a>
        <div className="nav-wrapper" style={{ position: 'absolute', right: '18px' }}>
          {!isToken
            ?
            <ul className="right sidenav" id="slide-out">
              <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1">LOGIN</a></li>
              <li><a href="/register" className="waves-effect waves-light btn #66bb6a green lighten-1">REGISTER</a></li>
              <li><a href="/about" className="waves-effect waves-light btn #66bb6a green lighten-1">ABOUT US</a></li>
            </ul>
            :
            <ul className="right sidenav" id="slide-out">
              <li><a href="/mealplan" className="waves-effect waves-light btn #66bb6a green lighten-1">Meal Plan</a></li>
              <li><a href="/grocery" className="waves-effect waves-light btn #66bb6a green lighten-1">Make Grocery List</a></li>
              <li><a href="/savedgrocery" className="waves-effect waves-light btn #66bb6a green lighten-1">View Grocery List</a></li>
              <li><a href="/product" className="waves-effect waves-light btn #66bb6a green lighten-1">PRODUCT SEARCH</a></li>
              <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1" onClick={logout}>LOG OUT</a></li>
            </ul>
          }
          <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
          {shouldRedirect
            ? <Redirect to="/"/>
            : null}
        </div>
      </nav>
    </div>


  )
}



export default Nav;
