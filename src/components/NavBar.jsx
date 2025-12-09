import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx"; // Ensure the .jsx extension is here

function NavBar() {
  // Destructure the total count of items from the context.
  // We assume your CartContext provides a value named 'totalItems' or 'itemCount'.
  // If your context uses a different name, replace 'totalItems' here.
  const { totalItems } = useCart();

  // Fallback to 0 if totalItems is undefined or null (good practice)
  const cartCount = totalItems || 0;

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        backgroundColor: "#2c2c2c",
        color: "white",
      }}
    >
      <Link
        to="/"
        className="navbar-brand"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "1.5em",
          fontWeight: "bold",
        }}
      >
        Roast & Order
      </Link>

      <div className="navbar-links" style={{ display: "flex", gap: "25px" }}>
        <Link to="/shop" style={{ color: "white", textDecoration: "none" }}>
          Shop
        </Link>

        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          🛒 Cart ({cartCount}) {/* Display the dynamic count */}
        </Link>

        <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
