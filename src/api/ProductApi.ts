import axios from "axios"; // imported axios / CLient Library

// Async function to fetch products from api
export const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;  // returning response data
};
