import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  // Use state to manage a status message (simulating data loading)
  const [status, setStatus] = useState("Awaiting sales data...");

  const handleLoadData = () => {
    // Simulate an API call delay
    setStatus("Loading...");
    setTimeout(() => {
      setStatus("Sales data loaded successfully!");
    }, 1500); // Wait 1.5 seconds to simulate loading
  };

  return (
    <div className="admin-page" style={{ padding: "20px" }}>
      <h1>⚙️ Admin Dashboard</h1>
      <p style={{ color: "#666" }}>
        This central hub allows you to manage products, view sales data, and
        monitor user activity.
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Product Management Card */}
        <div
          style={{
            border: "1px solid #d3c0b3",
            padding: "20px",
            width: "300px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{ borderBottom: "2px solid #5d4037", paddingBottom: "10px" }}
          >
            Product Management
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              {/* Link placeholder for dedicated Product Management Page */}
              <a href="#" style={{ textDecoration: "none", color: "#5d4037" }}>
                → Manage Products (CRU Page)
              </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <a href="#" style={{ textDecoration: "none", color: "#5d4037" }}>
                → Add New Product Form (Placeholder)
              </a>
            </li>
          </ul>
        </div>

        {/* Order History and Data Management Card */}
        <div
          style={{
            border: "1px solid #d3c0b3",
            padding: "20px",
            width: "300px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{ borderBottom: "2px solid #5d4037", paddingBottom: "10px" }}
          >
            Order Tracking
          </h3>
          <p>
            Total pending orders: <strong style={{ color: "red" }}>5</strong>
          </p>
          <p style={{ marginBottom: "15px" }}>
            {/* 1. Linking to the dedicated Order Tracking page */}
            <Link
              to="/admin/orders"
              style={{
                textDecoration: "none",
                color: "#5d4037",
                fontWeight: "bold",
              }}
            >
              → View All Orders
            </Link>
          </p>

          {/* Interactive Button */}
          <button
            onClick={handleLoadData}
            style={{
              marginTop: "15px",
              padding: "8px 15px",
              backgroundColor: "#6d4c41",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Load Sales Data
          </button>
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            Status: {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
