import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Components/Home";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Posts } from "./Components/Posts";

function App() {
  // Lg0cBzdaHOdoKogmf3XmHQaV razorsecrtky
  const dataProvider = jsonServerProvider("http://candata.herokuapp.com");

  //Rlc66td1AMv4d4NLLsnyxLQ4seckey
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Admin dataProvider={dataProvider} exact path="/admin">
            <Resource name="paymentorder" list={Posts} />
          </Admin>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
