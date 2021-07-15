import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Slider from "./components/Slider";
//import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/slider">
            <Slider />
         </Route>
           {/* <Route exact path={["/", "/product"]}>
            <Product /> 
          </Route>*/}
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/product/:id">
            <Details />
          </Route>

          <Route exact path="/register" component={Register}/>
          
          <Route exact path="/login" component={Login}/>

          {/* <Route path="/login">
            <Login />
          </Route> */}

           
          <Route exact path="/" component={Home}/>
          

           {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
