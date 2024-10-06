import { ProductType } from "@/schemas/product";

type GetProductsParams = {
  category?: ProductType["category"];
  subcategory?: ProductType["subcategory"];
  platform?: ProductType["platform"][number];
};

const getProducts = async (
  params?: GetProductsParams,
): Promise<ProductType[]> => {
  try {
    const query = new URLSearchParams();

    if (params?.category) query.append("category", params.category);
    if (params?.subcategory) query.append("subcategory", params.subcategory);
    if (params?.platform) query.append("platform", params.platform);

    const response = await fetch(`/api/products?${query.toString()}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const products = await response.json();
    return products as ProductType[];
  } catch (error) {
    console.error("There was an error: ", error);
    throw error;
  }
};

export default getProducts;
