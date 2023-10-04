import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import NavBar from "./modules/Navbar";
import "./App.css";
import "../utilities.css";

const hardUserId = "01";
const App = () => {
  const userId = hardUserId;
  return (
    <div>
      <div className="App-NavBarContainer">
        <NavBar userId={userId} />
      </div>
      <div className="App-NavBarSpacer" />
      <Router>
        <Home path="/" userId={userId} />
      </Router>
    </div>
  );
};

export default App;
