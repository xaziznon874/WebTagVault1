import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <CssBaseline />
      <App />
    </BrowserRouter>
  </StrictMode>
);
