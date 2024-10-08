"use client";

import FloatingMenu from "@/components/common/FloatingMenu/FloatingMenu";
import { useMainContext } from "@/providers/Providers";
import { Platforms } from "@/schemas/product";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { HiXMark as CloseIcon } from "react-icons/hi2";

export default function FilterMenu() {
  const t = useTranslations("persistent.topNavigationBar");
  const { setFilterMenuOpen } = useMainContext();
  const locale = useLocale();
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const minPrice = 0;
  const maxPrice = 100;
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

  const buildFilterUrl = (): string => {
    const platformParam = selectedPlatform
      ? `platform=${selectedPlatform}`
      : "";
    const minPriceParam = `minPrice=${priceRange[0]}`;
    const maxPriceParam = `maxPrice=${priceRange[1]}`;

    const params = [platformParam, minPriceParam, maxPriceParam]
      .filter(Boolean)
      .join("&");

    return `/marketplace?${params}`;
  };

  return (
    <FloatingMenu className="w-[35rem] rounded-xl bg-background-2">
      <div className="grid grid-cols-3 p-6">
        <CloseIcon
          size={24}
          onClick={() => setFilterMenuOpen(false)}
          className="cursor-pointer transition-all hover:text-accent"
        />
        <p className="text-center font-bold">{t("labels.filters")}</p>
      </div>
      <hr className="border-border" />
      <div className="p-6">
        <p className="mb-10">{t("labels.priceRange")}</p>
        <div className="mx-auto mb-8 w-[92%]">
          <Slider
            range
            min={minPrice}
            max={maxPrice}
            value={priceRange}
            onChange={(value: number | number[]) => {
              if (Array.isArray(value)) {
                setPriceRange(value as [number, number]);
              }
            }}
            styles={{
              track: { backgroundColor: "#ca323d", height: 2 },
              handle: {
                borderColor: "#f1f1f1",
                height: 32,
                outline: "none",
                boxShadow: "none",
                width: 32,
                marginTop: -16,
              },
              rail: { backgroundColor: "#515151", height: 2 },
            }}
          />
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs">{t("labels.minimum")}</p>
            <div className="flex w-24 gap-1 rounded-full border-[1px] border-border px-4 py-2 text-center text-text-white">
              <span>$</span>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-full bg-transparent text-center outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs">{t("labels.maximum")}</p>
            <div className="flex w-24 gap-1 rounded-full border-[1px] border-border px-4 py-2 text-center text-text-white">
              <span>$</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full bg-transparent text-center outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-border" />
      <div className="p-6">
        <p>{t("labels.platforms")}</p>
        <div className="mt-6 grid w-fit grid-cols-3 gap-[10px]">
          {Object.entries(Platforms)
            .map(([key, value]) => {
              return { key, en: value.en, ja: value.ja };
            })
            .map(({ key, en, ja }) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedPlatform(key);
                }}
                className={`${selectedPlatform === key ? "border-accent" : "border-border"} flex h-16 w-32 flex-col items-start justify-end rounded-lg border-[1px] px-3 py-2`}
              >
                {key !== "others" ? (
                  <Image
                    src={`/assets/platform_icons/${key}.svg`}
                    alt="platform"
                    width={256}
                    height={256}
                    className="h-6 w-auto"
                  />
                ) : (
                  <div />
                )}
                <span className="text-[10px]">{locale === "ja" ? ja : en}</span>
              </button>
            ))}
        </div>
      </div>
      <hr className="border-border" />
      <div className="flex items-center justify-between p-6">
        <button
          onClick={() => {
            setSelectedPlatform("");
            setPriceRange([minPrice, maxPrice]);
          }}
          className="transition-all hover:text-accent"
        >
          {t("buttons.clearAll")}
        </button>
        <button
          onClick={() => {
            setFilterMenuOpen(false);
            router.push(buildFilterUrl());
          }}
          className="w-44 rounded-lg bg-text-white px-8 py-2 text-background-1 transition-all hover:bg-accent hover:text-text-white"
        >
          {t("buttons.apply")}
        </button>
      </div>
    </FloatingMenu>
  );
}
