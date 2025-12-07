import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx"; // 👈 Import Provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* CRITICAL: Wrap the App component with the CartProvider to fix the useContext error */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
