import React from "react";
import CartItem from "../components/CartItem.jsx";
import { useCart } from "../context/CartContext.jsx";

function Cart() {
  // 1. CRITICAL FIX: Use the standardized function names from CartContext
  const {
    cartItems,
    updateQuantity, // <--- CORRECTED NAME
    removeItem, // <--- CORRECTED NAME
    handleCheckout,
  } = useCart();

  // Calculate the total cost
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-page" style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <a href="/shop">Go shopping!</a>
        </p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem
                key={item.product.id} // Use the unique product ID for the key
                item={item}
                // 2. CRITICAL FIX: Pass the corrected names as props to CartItem
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>

          <div
            className="cart-summary"
            style={{
              marginTop: "30px",
              borderTop: "2px solid #ccc",
              paddingTop: "15px",
              textAlign: "right",
            }}
          >
            <h3 style={{ fontSize: "1.5em" }}>Total: ${subtotal.toFixed(2)}</h3>
            <button
              onClick={handleCheckout}
              style={{
                backgroundColor: "#6d4c41",
                color: "white",
                padding: "12px 25px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
