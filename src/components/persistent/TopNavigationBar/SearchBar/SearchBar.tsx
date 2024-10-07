"use client";

import CategoryMenu from "./CategoryMenu/CategoryMenu";
import { useMainContext } from "@/providers/Providers";
import { Categories, Platforms, SubCategories } from "@/schemas/product";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import {
  HiMagnifyingGlass as SearchIcon,
  HiOutlineAdjustmentsHorizontal as FilterIcon,
} from "react-icons/hi2";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const locale = useLocale();
  const searchParams = useSearchParams();
  const {
    categoryMenuOpen,
    setCategoryMenuOpen,
    activeSearchBarSide,
    setActiveSearchBarSide,
    closeMenus,
    setSearchQuery,
  } = useMainContext();
  const currentCategory = searchParams.get("category");
  const currentSubcategory = searchParams.get("subcategory");
  const currentPlatform = searchParams.get("platform");
  const t = useTranslations("persistent.topNavigationBar");

  enum ActiveSidebar {
    left = "left-0 opacity-100",
    right = "left-1/2 opacity-100",
    none = "opacity-0",
  }

  const getDisplayName = (): string => {
    if (locale === "ja") {
      return (
        (currentPlatform && Platforms[currentPlatform]?.ja) ||
        (currentSubcategory && SubCategories[currentSubcategory]?.ja) ||
        (currentCategory && Categories[currentCategory]?.ja) ||
        t("placeholders.all")
      );
    } else {
      return (
        (currentPlatform && Platforms[currentPlatform]?.en) ||
        (currentSubcategory && SubCategories[currentSubcategory]?.en) ||
        (currentCategory && Categories[currentCategory]?.en) ||
        t("placeholders.all")
      );
    }
  };

  return (
    <div className="flex w-full items-center gap-2 md:max-w-[33rem]">
      <div className="relative grid w-full grid-cols-2 rounded-[100px] p-1 text-text-gray">
        <div
          onClick={() => {
            closeMenus({});
            setActiveSearchBarSide("left");
            inputRef.current?.focus();
          }}
          className={`${
            activeSearchBarSide === "left" || activeSearchBarSide === "right"
              ? "border-transparent"
              : "border-background-3"
          } flex justify-between border-r-2 pl-8 transition-all`}
        >
          <div className="flex flex-col justify-center">
            <p
              className={`${
                activeSearchBarSide === "left"
                  ? "h-0 opacity-0"
                  : "h-full opacity-100"
              } text-xs font-bold transition-all`}
            >
              {t("labels.search")}
            </p>
            <input
              ref={inputRef}
              type="text"
              onFocus={() => setActiveSearchBarSide("left")}
              onBlur={() => setActiveSearchBarSide("none")}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("placeholders.search")}
              className="w-full bg-transparent pr-8 outline-none"
            />
          </div>
        </div>
        <div
          onClick={() => {
            closeMenus({ except: "category" });
            setCategoryMenuOpen((prev) => !prev);
            setActiveSearchBarSide(
              activeSearchBarSide === "right" ? "none" : "right",
            );
          }}
          className="relative flex justify-between pl-8"
        >
          <div>
            <p className="text-xs font-bold">{t("labels.category")}</p>
            <p>{getDisplayName()}</p>
          </div>
          <button className="rounded-full bg-accent p-2">
            <SearchIcon className="h-6 w-6 text-text-white" />
          </button>
          {categoryMenuOpen && <CategoryMenu />}
        </div>
        <div
          className={`pointer-events-none absolute left-0 -z-20 h-full w-full rounded-[100px] bg-background-2`}
        />
        <div
          className={`${ActiveSidebar[activeSearchBarSide]} pointer-events-none absolute -z-10 h-full w-1/2 rounded-[100px] bg-background-3 transition-all`}
        />
      </div>
      <div className="hidden sm:block">
        <button className="rounded-full border-[1px] border-text-white p-2 text-text-white transition-all hover:border-accent hover:text-accent">
          <FilterIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
