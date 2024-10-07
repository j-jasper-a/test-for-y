// api/products.ts
import { ProductType } from "@/schemas/product";

export async function getProductById(id: string): Promise<ProductType | null> {
  try {
    const response = await fetch(`/api/products/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.error("Product not found");
      } else {
        console.error("An error occurred while fetching the product");
      }
      return null;
    }

    const product: ProductType = await response.json();
    return product;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
