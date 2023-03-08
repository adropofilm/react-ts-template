import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";

console.log("Hello from index.tsx");
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
