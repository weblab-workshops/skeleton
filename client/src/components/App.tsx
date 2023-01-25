import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { CredentialResponse } from "@react-oauth/google";
import { Routes, Route } from "react-router-dom";

import { get, post } from "../utilities";
import NotFound from "./pages/NotFound";
import Skeleton from "./pages/Skeleton";
import { socket } from "../client-socket";
import User from "../../../shared/User";
import "../utilities.css";

const App = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    get("/api/whoami").then((user: User) => {
      if (user._id) {
        // They are registed in the database and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse: CredentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken as string) as { name: string; email: string };
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

  return (
    <Routes>
      <Route
        path="/"
        element={<Skeleton handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
