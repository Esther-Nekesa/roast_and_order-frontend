import React from "react";

/**
 * Renders a single item in the shopping cart.
 * It uses standardized prop names (updateQuantity and removeItem)
 * that typically match functions provided by the CartContext.
 */
function CartItem({ item, updateQuantity, removeItem }) {
  // Destructure the product details and current quantity from the 'item' object
  const { product, quantity } = item;

  // Use a helper function to safely handle quantity changes from the input field
  const handleQuantityChange = (e) => {
    let newQuantity = Number(e.target.value);

    // 1. Ensure the new quantity is not negative
    if (newQuantity < 0 || isNaN(newQuantity)) {
      newQuantity = 0;
    }

    if (newQuantity === 0) {
      // 2. If quantity is zero, immediately remove the item
      removeItem(product.id);
    } else {
      // 3. Otherwise, update the quantity via the context function
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div
      className="cart-item"
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        padding: "10px 0",
      }}
    >
      {/* Product Name */}
      <div className="cart-name" style={{ flex: 3, fontWeight: "bold" }}>
        {product.name}
      </div>

      {/* Price per unit */}
      <div className="cart-price" style={{ flex: 1 }}>
        ${product.price.toFixed(2)}
      </div>

      {/* Quantity Input */}
      <input
        type="number"
        min="0"
        value={quantity}
        onChange={handleQuantityChange}
        style={{ flex: 1, padding: "5px", width: "60px", textAlign: "center" }}
        aria-label={`Quantity of ${product.name}`}
      />

      {/* Subtotal */}
      <div
        className="cart-subtotal"
        style={{ flex: 1, fontWeight: "bold", textAlign: "right" }}
      >
        ${(product.price * quantity).toFixed(2)}
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(product.id)}
        style={{
          flex: 1,
          padding: "5px 10px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          maxWidth: "100px",
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
