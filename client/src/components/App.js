import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";

import "../utilities.css";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Allston Brighton CDC Data Visualization</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
