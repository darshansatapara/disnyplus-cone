import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Header from "./component/Header";

function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Login />
    </BrowserRouter>
  );
}

export default App;
