import allProducts from "../../../../../database/products.json";
import { ProductType } from "@/schemas/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const product = (allProducts as ProductType[]).find(
    (product) => product.id === id,
  );

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
