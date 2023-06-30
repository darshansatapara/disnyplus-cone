import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Header from "./component/Header";
import Home from "./component/Home";
import Detail from "./component/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exect path="/" element={<Login />} />
        <Route exect path="/home" element={<Home />} />
        <Route exect path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
