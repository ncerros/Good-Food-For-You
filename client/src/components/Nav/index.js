import React from 'react'


function Nav () {

  const logout = (props) => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

    return (
      <div>
        <nav>
          <div className="nav-wrapper #81c784 green lighten-2">
            <a href="/" className="brand-logo left">Good Foods</a>
            <ul id="nav-mobile" className="right">
              {!localStorage.getItem("token") ? 
                <>
                  <li><a href="/About" className="waves-effect waves-light btn #66bb6a green lighten-1">ABOUT US</a></li>
                  <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1">LOGIN</a></li>
                  <li><a href="/register" className="waves-effect waves-light btn #66bb6a green lighten-1">REGISTER</a></li> 
                </> 
              : 
                <>
                  <li><a href="/" className="waves-effect waves-light btn #66bb6a green lighten-1">HOME</a></li>
                  <li><a href="/product" className="waves-effect waves-light btn #66bb6a green lighten-1">PRODUCT SEARCH</a></li>
                  <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1" onClick={logout}>LOG OUT</a></li>
                
                </>
              }
              
             
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default Nav;


// /*eslint-disable */
// class Nav extends Component {
//   render() {
//       return (
//         <div>
//           <nav>
//             <div className="nav-wrapper #81c784 green lighten-2">
//               <a href="#" className="brand-logo left">Good Foods</a>
//               <ul id="nav-mobile" className="right">
//                 <li><a href="/" className="waves-effect waves-light btn #66bb6a green lighten-1">HOME</a></li>
//                 <li><a href="/product" className="waves-effect waves-light btn #66bb6a green lighten-1">PRODUCT SEARCH</a></li>
//                 <li><a href="/login" className="waves-effect waves-light btn #66bb6a green lighten-1">LOGIN</a></li>
//                 <li><a href="/register" className="waves-effect waves-light btn #66bb6a green lighten-1">REGISTER</a></li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       )
//   }
// }

// export default Nav;