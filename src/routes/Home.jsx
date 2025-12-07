import React from "react";

const Home = () => {
  return (
    <div
      className="home-page"
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1>☕ Welcome to Roast & Order! ☕</h1>
      <p
        style={{
          fontSize: "1.4em",
          color: "#5d4037",
          maxWidth: "800px",
          margin: "20px auto",
        }}
      >
        Experience the finest single-origin and expertly blended coffee beans
        delivered fresh to your door.
      </p>

      {/* --- START OF RELIABLE CSS BOX BANNER --- */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "400px",
          margin: "40px auto 20px auto",
          backgroundColor: "#a1887f", // Coffee color as background
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5em",
        }}
      >
        [COFFEE SHOP BANNER AREA]
      </div>
      {/* --- END OF RELIABLE CSS BOX BANNER --- */}

      {/* Call to Action */}
      <button
        onClick={() => (window.location.href = "/shop")}
        style={{
          padding: "12px 25px",
          fontSize: "1.2em",
          backgroundColor: "#5d4037",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Explore Our Roasts Now!
      </button>

      <p style={{ marginTop: "40px", color: "#777" }}>
        Trusted by thousands of coffee lovers across the country.
      </p>
    </div>
  );
};

export default Home;
