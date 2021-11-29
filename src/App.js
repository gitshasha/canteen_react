import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Components/Home";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Posts } from "./Components/Posts";
function App() {
  const [orderno, setorderno] = useState([]);
  const [logstatus, setlogstatus] = useState(0);
  const dataProvider = jsonServerProvider("http://localhost:5000");

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login setlogstatus={setlogstatus} />
          </Route>
          <Route exact path="/home">
            <Home setorderno={setorderno} />
          </Route>
          <Admin dataProvider={dataProvider} exact path="/admin">
            <Resource name="posts" list={Posts} />
          </Admin>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
