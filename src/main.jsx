// frontend/src/main.jsx (The final clean version)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// NOTE: You don't need to import CartProvider here, as it's correctly used in App.jsx

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* App contains the Router and CartProvider wrappers inside */}
    <App />
  </React.StrictMode>
);
