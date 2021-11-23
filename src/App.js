import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./Components/Home";

function App() {
  const [orderno, setorderno] = useState([]);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home setorderno={setorderno} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
