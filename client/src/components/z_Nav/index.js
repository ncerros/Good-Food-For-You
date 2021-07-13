import React from "react";

function Nav() {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">Good Foods</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Grocery Product List</a></li>
        
      </ul>
    </div>
  </nav>
  );
}

export default Nav;


    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     Good Food & Meal Planning
    //   </a>
    // </nav>