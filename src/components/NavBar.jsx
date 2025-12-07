import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // 👈 Must be imported correctly

function NavBar() {
  // This line is where the crash occurs if CartProvider is missing in main.jsx
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Roast & Order
      </Link>
      <div className="navbar-links">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          Cart ({totalItems}) {/* Display the dynamic count */}
        </Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default NavBar;
