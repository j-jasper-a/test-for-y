"use client";

import Ratings from "@/components/common/Ratings/Ratings";
import { Categories, ProductType, SubCategories } from "@/schemas/product";
import { getLocalPrice } from "@/utils/getLocalPrice";
import { useLocale } from "next-intl";
import Link from "next/link";

type Props = {
  product: ProductType;
  info?: boolean;
};

const ProductCard = ({ product, info = true }: Props) => {
  const locale = useLocale();

  const name = product.name;
  const creator = product.creator;
  const category =
    locale === "ja"
      ? Categories[product.category].ja
      : Categories[product.category].en;
  const subcategory =
    locale === "ja"
      ? SubCategories[product.subcategory].ja
      : SubCategories[product.subcategory].en;

  const ratings = product.ratings;

  return (
    <Link
      href={`/marketplace/products/${product.id}`}
      className="flex flex-col gap-2 text-sm"
    >
      <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-background-3 text-base">
        {info && (
          <div>
            <p>{category}</p>
            <p>{`>${subcategory}`}</p>
          </div>
        )}
      </div>
      {info && (
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-text-gray">{creator}</p>
          <Ratings ratings={ratings} />
          <p className="font-bold">
            {getLocalPrice({ price: product.price, locale: locale })}
          </p>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
