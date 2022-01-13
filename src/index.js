import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RouteSwitch from "./RouteSwitch";

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);