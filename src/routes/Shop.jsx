// frontend/src/routes/Shop.jsx

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext.jsx"; // <-- PATH FIXED HERE

// Assuming your FastAPI backend is running on port 8000
const API_URL = "http://localhost:8000/products";

const Shop = () => {
  const { addToCart } = useCart();

  // State to hold fetched products and handle UI status
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Could not load products. Please check the FastAPI server.");
    } finally {
      setIsLoading(false);
    }
  };

  // Run the fetch function once when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // --- Conditional Rendering for Status ---

  if (isLoading) {
    return (
      <div
        className="shop-page"
        style={{ padding: "20px", textAlign: "center" }}
      >
        <h2>Loading Products...</h2>
        <p>Attempting to connect to the backend...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="shop-page"
        style={{ padding: "20px", textAlign: "center", color: "red" }}
      >
        <h2>Error Loading Products</h2>
        <p>{error}</p>
        <button
          onClick={fetchProducts}
          style={{
            padding: "10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  // --- Success Rendering: Product Grid ---

  return (
    <div className="shop-page" style={{ padding: "20px" }}>
      <h2>Our Premium Coffee Selections ({products.length} Items)</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Map over the fetched products */}
        {products.map((product) => (
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
              {product.description || "Freshly roasted coffee beans."}
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
                margin: "10px 0",
              }}
            >
              ${parseFloat(product.price).toFixed(2)}
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
