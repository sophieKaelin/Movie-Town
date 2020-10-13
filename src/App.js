import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PosterCarousel from "./components/PosterCarousel.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <PosterCarousel />
        </Route>
        <Route path="/login"></Route>
        <Route path="/register"></Route>
        {/* ALWAYS LEAVE LAST */}
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
