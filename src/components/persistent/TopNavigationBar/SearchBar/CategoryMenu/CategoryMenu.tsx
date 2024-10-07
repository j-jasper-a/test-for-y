"use client";

import FloatingMenu from "@/components/common/FloatingMenu/FloatingMenu";
import Link from "next/link";
import { useState } from "react";
import { HiChevronRight as RightIcon } from "react-icons/hi";

const menuItems = [
  {
    category: "Avatars",
    subcategory: [
      {
        name: "Human-like",
        url: "/marketplace?category=avatars&subcategory=human_like",
      },
      {
        name: "Anthro & Furry",
        url: "/marketplace?category=avatars&subcategory=anthro_furry",
      },
      {
        name: "Robot & Cyborgs",
        url: "/marketplace?category=avatars&subcategory=robot_cyborgs",
      },
      {
        name: "Others",
        url: "/marketplace?category=avatars&subcategory=others",
      },
      {
        name: "All in Avatars",
        url: "/marketplace?category=avatars",
      },
    ],
  },
  {
    category: "Fashion",
    subcategory: [
      {
        name: "Clothes",
        url: "/marketplace?category=fashion&subcategory=clothes",
      },
      {
        name: "Accessories",
        url: "/marketplace?category=fashion&subcategory=accessories",
      },
      {
        name: "All in Fashion",
        url: "/marketplace?category=fashion",
      },
    ],
  },
];

export default function CategoryMenu() {
  const [currentCategory, setCurrentCategory] = useState<string>("");

  // Find the subcategory of the currently selected category
  const selectedCategory = menuItems.find(
    (item) => item.category === currentCategory,
  );

  return (
    <FloatingMenu className="bg-background-3 text-text-white shadow-sm shadow-background-2">
      <div className="grid h-[22rem] w-[28rem] grid-cols-[repeat(2,_1fr)] p-4">
        {/* Left side: Categories */}
        <ul
          className={`${
            currentCategory !== "" ? "border-border" : "border-transparent"
          } border-collapse border-r-[1px] pr-2 transition-all`}
        >
          {menuItems.map((item) => (
            <li
              key={item.category}
              onMouseEnter={() => setCurrentCategory(item.category)}
              className={`${
                currentCategory === item.category ? "bg-background-4" : ""
              } flex items-center justify-between rounded-full p-2 transition-all`}
            >
              <span>{item.category}</span>
              <RightIcon size={16} />
            </li>
          ))}
          {/* All category */}
          <li onMouseEnter={() => setCurrentCategory("")}>
            <Link
              href="/marketplace"
              className="flex items-center justify-between rounded-full p-2 hover:bg-background-4"
            >
              All
            </Link>
          </li>
        </ul>

        {/* Right side: Subcategories */}
        <ul className="pl-2">
          {selectedCategory && (
            <ul>
              {selectedCategory.subcategory.map((subItem) => (
                <li key={subItem.name}>
                  <Link
                    href={subItem.url}
                    className="flex items-center justify-between rounded-full p-2 transition-all hover:bg-background-4"
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </FloatingMenu>
  );
}
