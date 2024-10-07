import ProductCard from "../../ProductCard/ProductCard";
import { ProductType } from "@/schemas/product";

type ProductPreviewProps = {
  product: ProductType;
};

export default function ProductPreview({ product }: ProductPreviewProps) {
  return (
    <div className="flex w-full flex-col gap-4 sm:max-w-[20rem] md:max-w-[24rem]">
      <ProductCard product={product} info={false} />
      <div className="grid grid-cols-5 gap-4">
        <div className="rounded-2xl border-2 border-text-gray p-1 transition-all hover:border-accent">
          <ProductCard product={product} info={false} />
        </div>
        <div className="rounded-2xl border-2 border-text-gray p-1 transition-all hover:border-accent">
          <ProductCard product={product} info={false} />
        </div>
        <div className="rounded-2xl border-2 border-text-gray p-1 transition-all hover:border-accent">
          <ProductCard product={product} info={false} />
        </div>
        <div className="rounded-2xl border-2 border-text-gray p-1 transition-all hover:border-accent">
          <ProductCard product={product} info={false} />
        </div>
        <div className="rounded-2xl border-2 border-text-gray p-1 transition-all hover:border-accent">
          <ProductCard product={product} info={false} />
        </div>
      </div>
    </div>
  );
}
