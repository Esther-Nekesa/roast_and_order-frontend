import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Use a local state for cart items
  const [cartItems, setCartItems] = useState([
    {
      product: { id: 102, name: "Ethiopian Yirgacheffe", price: 15.49 },
      quantity: 1,
    }, // Start with one item for testing
  ]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const onUpdateQty = (productId, newQuantity) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const onRemove = (productId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout! Thank you for your order.");
    // In a real app, you would navigate to a checkout page here.
    setCartItems([]); // Clear the cart after checkout simulation
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const value = {
    cartItems,
    totalItems,
    addToCart,
    onUpdateQty,
    onRemove,
    handleCheckout, // 👈 Added checkout handler
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
