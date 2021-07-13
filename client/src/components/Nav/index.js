import React, { Component } from 'react'

/*eslint-disable */
class Nav extends Component {
    render() {
        return (
          <div>
            <nav>
              <div class="nav-wrapper #81c784 green lighten-2">
                <a href="#" class="brand-logo left">Good Foods</a>
                <ul id="nav-mobile" class="right">
                  <li><a href="/" className="waves-effect waves-light btn #66bb6a green lighten-1">HOME</a></li>
                  <li><a href="/product" className="waves-effect waves-light btn #66bb6a green lighten-1">PRODUCT SEARCH</a></li>
                  <li><a href="#" className="waves-effect waves-light btn #66bb6a green lighten-1">LOGIN</a></li>
                  <li><a href="#" className="waves-effect waves-light btn #66bb6a green lighten-1">SIGNUP</a></li>
                </ul>
              </div>
            </nav>
          </div>
        )
    }
}

export default Nav;
