import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import router
import { BrowserRouter as Router } from "react-router-dom";

// wrap our application inside of router to enable using router
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header className="header" />
    
      <App />
      
    <Footer className="footer" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();