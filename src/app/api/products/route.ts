import allProducts from "../../../../database/products.json";
import { NextRequest, NextResponse } from "next/server";

type SearchParamsType = {
  category?: string;
  subcategory?: string;
  platform?: string;
};

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const { searchParams } = url;

  const { category, subcategory, platform } = Object.fromEntries(
    searchParams,
  ) as SearchParamsType;

  let filteredProducts = allProducts;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category,
    );
  }

  if (subcategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.subcategory === subcategory,
    );
  }

  if (platform) {
    filteredProducts = filteredProducts.filter((product) =>
      product.platform.includes(platform),
    );
  }

  return NextResponse.json(filteredProducts);
}
