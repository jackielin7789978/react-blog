import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import GlobalStyle from "./constants/globalStyle";

ReactDOM.render(
  <Router basename="/">
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById("root")
);
