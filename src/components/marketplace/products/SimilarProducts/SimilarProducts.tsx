import ProductCard from "../../ProductCard/ProductCard";
import { ProductType } from "@/schemas/product";
import { useTranslations } from "next-intl";

type SimilarProductsProps = {
  products?: ProductType[];
};

export default function SimilarProducts({ products }: SimilarProductsProps) {
  const t = useTranslations("pages.product");

  if (!products) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 overflow-scroll sm:overflow-auto">
      <p className="text-3xl font-bold">{t("titles.similarProducts")}</p>
      <div className="flex w-full justify-between gap-2">
        {products?.slice(0, 5).map((product) => (
          <div key={product.id} className="w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
