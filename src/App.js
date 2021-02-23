import React, {useEffect} from "react";
import './App.css';
import Orders from'./Orders';
import Header from './Header';
import Payment from "./Payment";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import { auth } from "./firebase";
import { useState, useStateValue} from "./StateProvider";
const promise = loadStripe("pk_test_51IK92NG8RnYDLgWVqLXQAiafUiKUNfK8OoYwxarsNQCb1KDmxKXd21g0f96KFlpil03u2OhgIJ1gyjqux3V5opPo00aW8BZyXd");

function App() {
const [{}, dispatch] = useStateValue();

useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);
  return (
 //BEM
    <Router>
    <div className="app">
    
     <Switch>
     <Route path="/login">
       <Login />
      </Route>
      <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
        <Payment />
          </Elements>
      </Route>
      <Route path="/orders">
       
        
        <Orders />
          
      </Route>
      <Route path="/checkout">
      <Header />
        <Checkout />
        
      </Route>
     
      <Route path="/">
      <Header />
        <Home />
      </Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
