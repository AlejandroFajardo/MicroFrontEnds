import React from "react";
import ReactDOM from "react-dom/client";

import { Navbar } from "./components/Navbar";

const App = () => (
  <div className="container">
    <>
      <h1>
        <Navbar/>
      </h1>
    </>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
