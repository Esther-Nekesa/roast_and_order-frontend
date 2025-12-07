import React from "react";
import { useCart } from "../context/CartContext.jsx";

// Updated Dummy product list with 12 selections
const PRODUCTS = [
  {
    id: 101,
    name: "Dark Roast Sumatra",
    price: 18.99,
    description:
      "Bold and smoky flavor. Perfect for espresso and French Press.",
  },
  {
    id: 102,
    name: "Ethiopian Yirgacheffe",
    price: 15.49,
    description:
      "Fruity and floral notes. Great for pour-over and drip coffee.",
  },
  {
    id: 103,
    name: "Decaf Colombian",
    price: 16.99,
    description: "Smooth, water-processed decaf. Ideal for late nights.",
  },
  {
    id: 104,
    name: "Light Roast Costa Rica",
    price: 14.5,
    description: "Bright acidity with hints of citrus and honey.",
  },
  {
    id: 105,
    name: "Medium Blend House Select",
    price: 17.25,
    description: "Our most popular blend, balanced and versatile.",
  },
  {
    id: 106,
    name: "Kenya AA Single Origin",
    price: 21.0,
    description: "Complex flavor with savory and sweet undertones.",
  },

  // --- New Products Added ---
  {
    id: 107,
    name: "Guatemala Antigua",
    price: 19.5,
    description: "Rich, dark chocolate notes with a subtle spice finish.",
  },
  {
    id: 108,
    name: "Brazil Santos",
    price: 13.99,
    description: "Low acidity, smooth body, and nutty flavor.",
  },
  {
    id: 109,
    name: "Espresso Blend",
    price: 18.25,
    description: "A dark blend engineered for perfect crema and body.",
  },
  {
    id: 110,
    name: "Holiday Spice Blend",
    price: 22.0,
    description: "Seasonal blend with cinnamon, clove, and vanilla notes.",
  },
  {
    id: 111,
    name: "Rwanda Bourbon",
    price: 16.75,
    description: "Delicate tea-like body with sweet, caramel aromas.",
  },
  {
    id: 112,
    name: "Peruvian Organic",
    price: 15.99,
    description: "Medium roast, clean finish, and Fair Trade certified.",
  },
];

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="shop-page" style={{ padding: "20px" }}>
      <h2>Our Premium Coffee Selections</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{product.name}</h3>
            <p style={{ color: "#555", minHeight: "40px" }}>
              {product.description}
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
                margin: "10px 0",
              }}
            >
              ${product.price.toFixed(2)}
            </p>

            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "#a1887f",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
