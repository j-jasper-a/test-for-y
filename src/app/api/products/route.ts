import products from "../../../../database/products.json";
import { ProductType } from "@/schemas/product";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filters: Partial<Record<keyof ProductType, string>> = {
    category: searchParams.get("category") as ProductType["category"],
    subcategory: searchParams.get("subcategory") as ProductType["subcategory"],
    platform: searchParams.get("platform") as ProductType["platforms"][number],
  };

  const filteredProducts = products.filter((product: ProductType) =>
    Object.entries(filters).every(
      ([key, value]) =>
        !value ||
        (key === "platform"
          ? product.platforms.includes(value)
          : product[key as keyof ProductType] === value),
    ),
  );

  if (filteredProducts.length === 0) {
    return NextResponse.json(
      { message: "No products found matching the specified criteria" },
      { status: 404 },
    );
  }

  return NextResponse.json(filteredProducts);
}
