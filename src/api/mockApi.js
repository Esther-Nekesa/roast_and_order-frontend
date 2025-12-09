// frontend/src/api/mockApi.js

// Define the base URL for your Flask backend
const BASE_URL = "http://localhost:5000";

// Update this function to talk to your Flask server
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      // Throw an error if the HTTP status is not 200-299
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Return the JSON data from the backend
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products from backend:", error);

    // Fallback: Return empty array or throw error
    return [];
  }
};

// You will update fetchCategories, submitOrder, etc., in a similar way.

// Placeholder to ensure the file still exports the other functions until you update them:
export const fetchCategories = () => Promise.resolve([]);
export const submitOrder = (orderData) =>
  Promise.resolve({ success: true, orderId: 999 });
// ... other exported functions
