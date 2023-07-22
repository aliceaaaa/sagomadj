import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { SnackBarContextProvider } from "./Components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SnackBarContextProvider>
      <App />
    </SnackBarContextProvider>
  </React.StrictMode>
);

reportWebVitals();
