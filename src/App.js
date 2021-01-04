import './App.css';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import React from "react";

import Home from './views/Home';
import Login from './views/Login';
import NoMatch from './views/NoMatch';
import {Layout} from "./components/Layout"

import Navbar from './components/Navbar';
const navlinks = [
  { name: "Home", to: "/" },
  { name: "Login", to: "/login" },
];
const brand = { name: "peekaboo", to: "home" };

function App() {
  return (
    <React.Fragment>
      <Navbar brand={brand} links={navlinks} />
      
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
