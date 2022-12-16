import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./App";
import LoginProvider from "./context/LoginProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <GlobalStyle />
    <LoginProvider>
      <App />
    </LoginProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
