"use client";

import Loading from "@/components/common/Loading/Loading";
import ProductCard from "@/components/marketplace/ProductCard/ProductCard";
import { Platforms } from "@/schemas/product";
import { Categories, SubCategories } from "@/schemas/product";
import { getProductById } from "@/utils/getProductById";
import getProducts from "@/utils/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaFacebookMessenger as MessengerIcon,
  FaWhatsapp as WhatsAppIcon,
  FaShare as ShareIcon,
} from "react-icons/fa6";

type PageProps = {
  params: {
    id: string;
  };
};

const specs: {
  label: { en: string; ja: string };
  description: { en: string; ja: string };
}[] = [
  {
    label: {
      en: "Polygon Count",
      ja: "ポリゴン数",
    },
    description: {
      en: "15,000 polygons optimized for VR performance",
      ja: "VRパフォーマンス向けに最適化された15,000ポリゴン",
    },
  },
  {
    label: {
      en: "Texture Resolution",
      ja: "テクスチャ解像度",
    },
    description: {
      en: "4K PBR textures for realistic surfaces",
      ja: "リアルな表面のための4K PBRテクスチャ",
    },
  },
  {
    label: {
      en: "Compatibility",
      ja: "互換性",
    },
    description: {
      en: "Works with Oculus, SteamVR, PSVR2",
      ja: "Oculus、SteamVR、PSVR2に対応",
    },
  },
  {
    label: {
      en: "Avatar Size Range",
      ja: "アバターサイズ範囲",
    },
    description: {
      en: "Height adjustable from 135 cm to 200 cm",
      ja: "135cmから200cmまでの高さ調整可能",
    },
  },
  {
    label: {
      en: "Customization Options",
      ja: "カスタマイズオプション",
    },
    description: {
      en: "50+ adjustable features: skin, hair, etc",
      ja: "50以上の調整可能な特徴：肌、髪など",
    },
  },
  {
    label: {
      en: "Facial Expressions",
      ja: "表情",
    },
    description: {
      en: "25 pre-defined expression animations",
      ja: "25種類の定義済み表情アニメーション",
    },
  },
  {
    label: {
      en: "Tracking Points",
      ja: "トラッキングポイント",
    },
    description: {
      en: "Supports 18 body tracking points",
      ja: "18箇所の体のトラッキングポイントに対応",
    },
  },
  {
    label: {
      en: "Eye Tracking",
      ja: "アイトラッキング",
    },
    description: {
      en: "Natural gaze with adaptive tracking",
      ja: "適応型トラッキングによる自然な視線",
    },
  },
  {
    label: {
      en: "Lip-Sync Technology",
      ja: "リップシンク技術",
    },
    description: {
      en: "Real-time voice-to-lip animation",
      ja: "リアルタイムの音声に基づくリップアニメーション",
    },
  },
  {
    label: {
      en: "Supported File Formats",
      ja: "対応ファイル形式",
    },
    description: {
      en: "FBX, OBJ, GLTF export options",
      ja: "FBX、OBJ、GLTFのエクスポートオプション",
    },
  },
];

export default function ProductPage({ params }: PageProps) {
  const locale = useLocale();
  const productId = params.id;
  const EXCHANGE_RATE = 148.75;
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return <div>There is no product with that ID.</div>;
  }

  const price =
    locale === "ja"
      ? new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
        }).format(product.price * EXCHANGE_RATE)
      : new Intl.NumberFormat(locale, {
          style: "currency",
          currency: "USD",
        }).format(product.price);

  const breadcrumbs = [
    {
      name: locale === "ja" ? "すべて" : "All",
      href: "/marketplace",
    },
    {
      name:
        locale === "ja"
          ? Categories[product.category].ja
          : Categories[product.category].en,
      href: "/marketplace?category=" + product.category,
    },
    {
      name:
        locale === "ja"
          ? SubCategories[product.subcategory].ja
          : SubCategories[product.subcategory].en,
      href:
        "/marketplace?category=" +
        product.category +
        "&subcategory=" +
        product.subcategory,
    },
    {
      name: "",
      href: "",
    },
  ];

  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 py-4 sm:px-10 md:px-20">
      {/* Breadcrumbs */}
      <div className="flex items-center text-base font-bold">
        {breadcrumbs.map((breadcrumb, index) => (
          <Link
            href={breadcrumb.href}
            key={breadcrumb.name}
            className="flex items-center transition-all hover:text-accent"
          >
            <span key={breadcrumb.name}>{breadcrumb.name}</span>
            {index < breadcrumbs.length - 1 && (
              <span className="px-1 opacity-50">{`>`}</span>
            )}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        {/* Photos */}
        <div className="flex w-full flex-col justify-between gap-4 sm:max-w-[20rem] md:max-w-[24rem]">
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
        {/* Info */}
        <div className="flex h-full w-full flex-col justify-between gap-4 sm:max-w-[20rem] md:max-w-[24rem]">
          <div className="flex flex-col">
            <p className="text-accent">{`@${product.creator}`}</p>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold">{product.name}</p>
              <p className="text-sm text-text-gray">v19.2.1</p>
            </div>
          </div>
          <p>{price}</p>
          <p>{product.ratings}</p>
          <p>{`Introducing your ultimate virtual identity: a fully immersive, customizable VR avatar that mirrors your personality and style!`}</p>

          <div className="flex flex-col gap-1">
            <p className="font-bold">Supported Platforms</p>
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

          <div className="flex flex-col items-center gap-2">
            <button className="w-full rounded-lg border-[1px] border-text-white bg-text-white px-8 py-4 text-base font-medium text-background-1">
              Buy Now
            </button>
            <button>Add to Cart</button>
          </div>
        </div>
        {/* Specs */}
        <div className="flex flex-col gap-4 text-right">
          <p className="text-left text-3xl font-bold sm:text-right">
            Specifications
          </p>
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 justify-self-end sm:flex sm:w-auto sm:flex-col sm:text-right">
            {specs.map((spec) => (
              <div key={spec.label.en} className="text-xs">
                <p className="font-bold">
                  {locale === "ja" ? spec.label.ja : spec.label.en}
                </p>
                <p className="max-w-[30ch] text-text-gray">
                  {locale === "ja" ? spec.description.ja : spec.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Related Products */}
      <div className="flex flex-col gap-4 overflow-scroll sm:overflow-auto">
        <p className="text-3xl font-bold">Related Products</p>
        <div className="flex w-full justify-between gap-2">
          {products?.slice(0, 5).map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
