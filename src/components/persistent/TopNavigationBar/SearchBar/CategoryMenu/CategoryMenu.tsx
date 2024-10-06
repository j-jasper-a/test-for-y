"use client";

import FloatingMenu from "@/components/common/FloatingMenu/FloatingMenu";
import Link from "next/link";
import { useState } from "react";
import { HiChevronRight as RightIcon } from "react-icons/hi2";

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
      <div className="grid w-[28rem] grid-cols-[repeat(2,_1fr)]">
        {/* Left side: Categories */}
        <ul className="border-collapse p-4">
          {menuItems.map((item) => (
            <li
              key={item.category}
              onMouseEnter={() => setCurrentCategory(item.category)}
              className={`hover:bg-background-4 flex items-center justify-between rounded-full p-2`}
            >
              <span>{item.category}</span>
              <RightIcon size={16} />
            </li>
          ))}
          {/* All category */}
          <li onMouseEnter={() => setCurrentCategory("")}>
            <Link
              href="/marketplace"
              className="hover:bg-background-4 flex items-center justify-between rounded-full p-2"
            >
              All
            </Link>
          </li>
        </ul>

        {/* Right side: Subcategories */}
        <ul className="border-background-4 border-l-[1px] p-4">
          {selectedCategory && (
            <ul>
              {selectedCategory.subcategory.map((subItem) => (
                <li key={subItem.name}>
                  <Link
                    href={subItem.url}
                    className="hover:bg-background-4 flex items-center justify-between rounded-full p-2"
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
