import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

// Custom hook to consume the cart context easily
export const useCart = () => {
  // If useCart is called outside of a CartProvider, it will throw an error
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

  // Function to add a product to the cart or increment quantity if it exists
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

  // 1. RENAMED: Changed 'onUpdateQty' to 'updateQuantity'
  // Ensures consistency with CartItem.jsx
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
        // Automatically removes the item if the new quantity is 0 or less
        .filter((item) => item.quantity > 0)
    );
  };

  // 2. RENAMED: Changed 'onRemove' to 'removeItem'
  // Ensures consistency with CartItem.jsx
  const removeItem = (productId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout! Thank you for your order.");
    // In a real app, you would submit the order data to the backend here.
    setCartItems([]); // Clear the cart after checkout simulation
  };

  // Calculate the total number of items (used for the NavBar cart count)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Define the context value
  const value = {
    cartItems,
    totalItems,
    addToCart,
    // Use the new, clean names for export:
    updateQuantity,
    removeItem,
    handleCheckout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
