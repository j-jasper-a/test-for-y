"use client";

import CategoryMenu from "./CategoryMenu/CategoryMenu";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { HiMagnifyingGlass as SearchIcon } from "react-icons/hi2";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const currentSubcategory = searchParams.get("subcategory");
  const t = useTranslations("persistent.topNavigationBar");
  const [activeSidebar, setActiveSidebar] = useState<"left" | "right" | "none">(
    "none",
  );

  enum ActiveSidebar {
    left = "left-0 opacity-100",
    right = "left-1/2 opacity-100",
    none = "opacity-0",
  }

  return (
    <div className="relative grid w-full max-w-[33rem] grid-cols-2 rounded-[100px] p-1 text-text-gray">
      {/* Left Side */}
      <div
        onClick={() => setActiveSidebar("left")}
        className={`${activeSidebar === "left" || activeSidebar === "right" ? "border-transparent" : "border-background-3"} flex justify-between border-r-2 pl-8 transition-all`}
      >
        <div className="flex flex-col justify-center">
          <p
            className={`${activeSidebar === "left" ? "h-0 opacity-0" : "h-full opacity-100"} text-xs font-bold transition-all`}
          >
            {t("labels.search")}
          </p>
          <input
            type="text"
            onFocus={() => setActiveSidebar("left")}
            onBlur={() => setActiveSidebar("none")}
            placeholder={t("placeholders.search")}
            className="bg-transparent outline-none"
          />
        </div>
      </div>
      {/* Right Side */}
      <div
        onClick={() => setActiveSidebar("right")}
        className="relative flex justify-between pl-8"
      >
        <div>
          <p className="text-xs font-bold">{t("labels.category")}</p>
          {/* <p>{t("placeholders.all")}</p> */}
          <p>
            {currentSubcategory || currentCategory || t("placeholders.all")}
          </p>
        </div>
        <button className="rounded-full bg-accent p-2">
          <SearchIcon className="h-6 w-6" />
        </button>
        <CategoryMenu />
      </div>
      {/* Backgrounds */}
      <div
        className={`pointer-events-none absolute left-0 -z-20 h-full w-full rounded-[100px] bg-background-2`}
      />
      <div
        className={`${ActiveSidebar[activeSidebar]} pointer-events-none absolute -z-10 h-full w-1/2 rounded-[100px] bg-background-3 transition-all`}
      />
    </div>
  );
};

export default SearchBar;
