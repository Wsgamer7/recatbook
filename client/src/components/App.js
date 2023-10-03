import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import NavBar from "./modules/Navbar";
import "./App.css";
import "../utilities.css";
const App = () => {
  return (
    <div>
      <div className="App-NavBarContainer">
        <NavBar userId="null" />
      </div>
      <div className="App-NavBarSpacer" />
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
};

export default App;
