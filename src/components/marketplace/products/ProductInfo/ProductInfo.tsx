import Ratings from "@/components/common/Ratings/Ratings";
import { Platforms, ProductType } from "@/schemas/product";
import { getLocalPrice } from "@/utils/getLocalPrice";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ProductInfoProps = {
  product: ProductType;
  locale: string;
};

export default function ProductInfo({ product, locale }: ProductInfoProps) {
  const t = useTranslations("pages.product");

  return (
    <div className="flex h-full w-full flex-col justify-between gap-4 sm:max-w-[20rem] md:max-w-[24rem]">
      {/* Header */}
      <div className="flex flex-col">
        <p className="text-accent">{`@${product.creator}`}</p>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">{product.name}</p>
          <p className="text-sm text-text-gray">v19.2.1</p>
        </div>
        <div className="text-sm text-text-gray">
          <Ratings ratings={product.ratings} />
        </div>
      </div>
      {/* Description */}
      <p>{`Introducing your ultimate virtual identity: a fully immersive, customizable VR avatar that mirrors your personality and style!`}</p>
      {/* Supported Platforms */}
      <div className="flex flex-col gap-1">
        <p className="font-bold">{t("titles.supportedPlatforms")}</p>
        <div className="flex items-center gap-2">
          {product.platform?.map((platform) => (
            <div
              key={platform}
              className="flex items-center text-sm text-text-gray"
            >
              <Image
                src={`/assets/platform_icons/${platform}.svg`}
                alt={platform}
                width={32}
                height={32}
              />
              <p>
                {locale === "ja"
                  ? Platforms[platform].ja
                  : Platforms[platform].en}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Price */}
      <div className="mt-8 flex flex-col gap-1">
        <div className="flex items-end gap-2">
          <p className="text-3xl font-bold">
            {getLocalPrice({ price: product.price, locale: locale })}
          </p>
          <p className="text-text-gray line-through">
            {getLocalPrice({ price: product.price * 1.5, locale: locale })}
          </p>
        </div>
        <p className="text-xs text-text-gray">{`+ ${t("titles.bonusCredits")}`}</p>
      </div>
      {/* Actions */}
      <div className="flex flex-col items-center gap-2">
        <button className="w-full rounded-lg border-[1px] border-text-white bg-text-white px-8 py-4 text-base font-medium text-background-1 transition-all hover:border-accent hover:bg-accent hover:text-text-white">
          {t("buttons.buyNow")}
        </button>
        <button className="transition-all hover:text-accent">
          {t("buttons.addToCart")}
        </button>
      </div>
    </div>
  );
}
