import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "remoteNavbar/Navbar";
import { Counter } from "remoteCounter/Counter";


const App = () => (
  <div className="container">
    <h1>HOST</h1>
    <Navbar/>
    <Counter/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
