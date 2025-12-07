import React from "react";

function CartItem({ item, onUpdateQty, onRemove }) {
  const { product, quantity } = item;
  return (
    <div className="cart-item">
      <div className="cart-name">{product.name}</div>
      <div className="cart-price">${product.price.toFixed(2)}</div>
      <input
        type="number"
        min="0"
        value={quantity}
        onChange={(e) => onUpdateQty(product.id, Number(e.target.value))}
      />
      <button onClick={() => onRemove(product.id)}>Remove</button>
      <div className="cart-subtotal">
        ${(product.price * quantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartItem;
