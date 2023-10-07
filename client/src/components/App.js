import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import NavBar from "./modules/Navbar";
import { post } from "../utilities";
import "./App.css";
import "../utilities.css";

const App = () => {
  const [userId, setUserId] = useState(undefined);
  const handleLogin = (googleResponse) => {
    const body = {
      token: googleResponse.tokenId,
    };
    post("/api/login", body).then((user) => {
      console.log(user);
      setUserId(user._id);
    });
  };
  const handleLogout = () => {
    post("/api/logout").then(() => {
      setUserId(undefined);
    });
    console.log("had logout");
  };
  return (
    <div>
      <div className="App-NavBarContainer">
        <NavBar userId={userId} handleLogin={handleLogin} handleLogout={handleLogout} />
      </div>
      <div className="App-NavBarSpacer" />
      <Router>
        <Home path="/" userId={userId} />
      </Router>
    </div>
  );
};

export default App;
