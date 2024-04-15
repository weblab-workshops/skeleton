import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";

import NavBar from "./modules/NavBar.js";
import Home from "./pages/Home.js";
import Searches from "./pages/Searches.js";
import Definitions from "./pages/Definitions.js";
import Footer from "./modules/Footer.js";
import NotFound from "./pages/NotFound.js";
import "../index.css";

const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };
  console.log("hi");


  return (
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      <div className="App-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searches" element={<Searches />} />
          <Route path="/definitions" element={<Definitions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
