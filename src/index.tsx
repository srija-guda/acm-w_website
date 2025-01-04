import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Global CSS, if any

// Find the root DOM node to render the app
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
