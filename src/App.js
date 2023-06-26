import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";

function App() {
  return (
   
    <BrowserRouter>
     <Login/>
    </BrowserRouter>

    
  );
}

export default App;
