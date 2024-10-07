"use client";

import FloatingMenu from "@/components/common/FloatingMenu/FloatingMenu";
import { Categories, SubCategories } from "@/schemas/product";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { HiChevronRight as RightIcon } from "react-icons/hi";

type Locale = "en" | "ja";

type LocalizedName = {
  [key in Locale]: string;
};

type SubCategory = {
  id: string;
  name: LocalizedName;
  url: string;
};

type Category = {
  id: string;
  name: LocalizedName;
  url: string;
  subcategories: SubCategory[];
};

const menuItems: Category[] = [
  {
    id: "avatars",
    name: Categories["avatars"],
    url: "/marketplace?category=avatars",
    subcategories: [
      {
        id: "human_like",
        name: SubCategories["human_like"],
        url: "/marketplace?category=avatars&subcategory=human_like",
      },
      {
        id: "anthro_furry",
        name: SubCategories["anthro_furry"],
        url: "/marketplace?category=avatars&subcategory=anthro_furry",
      },
      {
        id: "robot_cyborgs",
        name: SubCategories["robot_cyborgs"],
        url: "/marketplace?category=avatars&subcategory=robot_cyborgs",
      },
      {
        id: "others",
        name: SubCategories["others"],
        url: "/marketplace?category=avatars&subcategory=others",
      },
      {
        id: "all_avatars",
        name: {
          en: "All in Avatars",
          ja: "アバターすべて",
        },
        url: "/marketplace?category=avatars",
      },
    ],
  },
  {
    id: "fashion",
    name: Categories["fashion"],
    url: "/marketplace?category=fashion",
    subcategories: [
      {
        id: "clothes",
        name: SubCategories["clothes"],
        url: "/marketplace?category=fashion&subcategory=clothes",
      },
      {
        id: "accessories",
        name: SubCategories["accessories"],
        url: "/marketplace?category=fashion&subcategory=accessories",
      },
      {
        id: "all_fashion",
        name: {
          en: "All in Fashion",
          ja: "ファッションすべて",
        },
        url: "/marketplace?category=fashion",
      },
    ],
  },
];

export default function CategoryMenu() {
  const locale: Locale = useLocale() as Locale;
  const [currentCategoryId, setCurrentCategoryId] = useState<string>("");

  const selectedCategory: Category | undefined = menuItems.find(
    (item) => item.id === currentCategoryId,
  );

  return (
    <FloatingMenu className="bg-background-3 text-text-white shadow-sm shadow-background-2">
      <div className="grid h-[22rem] w-[28rem] grid-cols-2 p-4">
        <ul
          className={`${
            currentCategoryId !== "" ? "border-border" : "border-transparent"
          } border-collapse border-r-[1px] pr-2 transition-all`}
        >
          {menuItems.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => setCurrentCategoryId(item.id)}
            >
              <Link
                href={item.url}
                className={`${
                  currentCategoryId === item.id ? "bg-background-4" : ""
                } flex items-center justify-between rounded-full p-2 transition-all`}
              >
                <span>{item.name[locale]}</span>
                <RightIcon size={16} />
              </Link>
            </li>
          ))}
          <li onMouseEnter={() => setCurrentCategoryId("")}>
            <Link
              href="/marketplace"
              className="flex items-center justify-between rounded-full p-2 hover:bg-background-4"
            >
              <span>{locale === "ja" ? "すべて" : "All"}</span>
            </Link>
          </li>
        </ul>

        <ul className="pl-2">
          {selectedCategory ? (
            <ul>
              {selectedCategory.subcategories.map((subItem) => (
                <li key={subItem.id}>
                  <Link
                    href={subItem.url}
                    className="flex items-center justify-between rounded-full p-2 transition-all hover:bg-background-4"
                  >
                    <span>{subItem.name[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </ul>
      </div>
    </FloatingMenu>
  );
}
