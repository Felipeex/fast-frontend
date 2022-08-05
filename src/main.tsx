/* libs*/
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/* style */
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

/* contexts */
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer />
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
