import { ProductType } from "@/schemas/product";

type GetProductsParams = {
  category?: string;
  subcategory?: string;
  platform?: string;
};

const getProducts = async (
  params?: GetProductsParams,
): Promise<ProductType[]> => {
  try {
    // Construct the query string based on the provided parameters
    const query = new URLSearchParams();

    if (params?.category) query.append("category", params.category);
    if (params?.subcategory) query.append("subcategory", params.subcategory);
    if (params?.platform) query.append("platform", params.platform);

    // Make the request to the API with the query string (if there are params)
    const response = await fetch(`/api/products?${query.toString()}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const products = await response.json();
    return products as ProductType[];
  } catch (error) {
    console.error("Error in getProducts:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export default getProducts;
