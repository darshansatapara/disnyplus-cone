import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route exect path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
