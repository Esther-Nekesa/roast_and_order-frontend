import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

// Import the functional files (ensure these exist in src/routes/)
import Cart from "./routes/Cart.jsx";
import Home from "./routes/Home.jsx";
import Shop from "./routes/Shop.jsx";
import Admin from "./routes/Admin.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
