import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  // <HashRouter basename='/'>
  // <Router history="/">
  <BrowserRouter basename="/cv-project/">
    <App />
  </BrowserRouter>,
  // </Router>,
  // </HashRouter>,
  document.getElementById("root")
);
