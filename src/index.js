import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import GlobalStyle from "./constants/globalStyle";
import { ScrollToTop } from "./utils";

ReactDOM.render(
  <Router basename="/">
    <ScrollToTop />
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById("root")
);
