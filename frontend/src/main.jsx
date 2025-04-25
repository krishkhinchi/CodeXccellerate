import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // This should include Tailwind CSS if you're using it

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
