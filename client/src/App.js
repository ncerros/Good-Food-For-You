import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Nav from "./components/Nav";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Home from "./pages/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Grocery from "./pages/Grocery";
import SavedGrocery from "./pages/SavedGrocery";
import MealPlan from "./pages/MealPlan";
import NoMatch from "./pages/NoMatch";


function App() {
  const [token, setToken] = useState();
  const [userName, setUserName] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(res)
      setUserName(res.data.user.fname);
      setToken(res.data.token._id)
    })()
  })
  

  return (
    <Router>
        <Nav
          isToken={token ? true : false}
        />
        <Switch>
          <Route exact path="/">
            <Home 
              userName={userName ? userName : null}
            />
          </Route>
          <Route exact path="/mealplan">
          <MealPlan />
          </Route>
          <Route exact path="/product">
          <Product />
          </Route>
          <Route exact path="/product/:id">
          <Details />
          </Route>
          <Route exact path="/about">
          <About /> :
          </Route>
          <Route exact path="/register">
            { !token 
                ? <Register
                    setToken={setToken}     
                  /> 
                : 
                  <Redirect to='/'/> }
          </Route>
          <Route exact path="/login">
            { !token
                ? 
                  <Login
                    setToken={setToken}
                    setUserName={setUserName}
                  />
                :
                  <Redirect to='/'/> }
          </Route>
          <Route exact path="/grocery">
          <Grocery />
          </Route>
          <Route exact path="/savedgrocery">
          <SavedGrocery />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
