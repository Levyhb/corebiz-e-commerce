import axios from "axios";

export async function getAllProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_PRODUCTS_API_URL;

  if (apiUrl) {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.log(`Error fetching products: ${error}`);
      throw new Error('Fetching products failed')
    }
  }
}
