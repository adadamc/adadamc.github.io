import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import{
  Navbar,
  About,
  Contact,
  Projects,
  Cancompute,
  Minecleaner,
  Busproject,
  Dominominigames,
  Squaredigits,
  Transit
} from "./components"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path = "/" element={<About />} />
      <Route path = "/contact" element={<Contact />} />
      <Route path = "/projects" element={<Projects />} />
      <Route path = "/cancompute" element={<Cancompute />} />
      <Route path = "/minecleaner" element={<Minecleaner />} />
      <Route path = "/busproject" element={<Busproject />} />
      <Route path = "/dominominigames" element={<Dominominigames />} />
      <Route path = "/squaredigits" element={<Squaredigits />} />
      <Route path = "/transit" element={<Transit />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
