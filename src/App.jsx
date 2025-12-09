import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. Context Import (Path is correct for 'src/context/')
import { CartProvider } from "./context/CartContext.jsx";
import NavBar from "./components/NavBar.jsx";

// 2. Component Imports (MODIFIED PATHS: Using './routes/' directory)
import Cart from "./routes/Cart.jsx";
import Home from "./routes/Home.jsx";
import Shop from "./routes/Shop.jsx";
import Admin from "./routes/Admin.jsx";
// Assuming OrderTracking will also be in routes/ later
// import OrderTracking from "./routes/OrderTracking.jsx";

function App() {
  return (
    // Wrap the entire application in the CartProvider
    <Router>
      <CartProvider>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />} />
            {/* Add a nested route for order tracking */}
            {/* <Route path="/admin/orders" element={<OrderTracking />} /> */}
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
