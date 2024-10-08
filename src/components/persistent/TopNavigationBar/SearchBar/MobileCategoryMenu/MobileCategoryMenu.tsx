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

export default function MobileCategoryMenu() {
  const locale = useLocale() as Locale;
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleSelectCategory = ({
    e,
    categoryId,
  }: {
    e: React.MouseEvent;
    categoryId: string;
  }) => {
    e.stopPropagation();
    setSelectedCategory(categoryId);
  };

  return (
    <FloatingMenu
      className={`${selectedCategory !== "" ? "w-64" : "w-56"} block bg-background-3 p-4 text-text-white shadow-sm shadow-background-2 transition-all sm:hidden`}
    >
      <ul>
        {selectedCategory === "" &&
          menuItems.map((category) => (
            <li key={category.id}>
              <button
                onClick={(e) =>
                  handleSelectCategory({ e: e, categoryId: category.id })
                }
                className="flex w-full cursor-pointer items-center justify-between rounded-full p-2 transition-all hover:bg-background-4"
              >
                <span>{category.name[locale]}</span>
                <RightIcon size={16} />
              </button>
            </li>
          ))}
        {selectedCategory !== "" && (
          <li>
            <button
              onClick={(e) => handleSelectCategory({ e: e, categoryId: "" })}
              className="flex w-full cursor-pointer items-center justify-between rounded-full bg-background-4 p-2 transition-all"
            >
              <span>
                {locale === "ja"
                  ? Categories[selectedCategory].ja
                  : Categories[selectedCategory].en}
              </span>
              <RightIcon size={16} />
            </button>
          </li>
        )}
        {selectedCategory === "" && (
          <li>
            <Link
              href="/marketplace"
              className="flex items-center justify-between rounded-full p-2 transition-all hover:bg-background-4"
            >
              <span>{locale === "ja" ? "すべて" : "All"}</span>
            </Link>
          </li>
        )}
      </ul>
      {selectedCategory !== "" && <hr className="mt-2 border-border" />}
      {selectedCategory !== "" && (
        <ul className="ml-6 mt-2">
          {selectedCategory !== "" &&
            menuItems
              .find((category) => category.id === selectedCategory)
              ?.subcategories.map((subcategory) => (
                <li key={subcategory.id}>
                  <Link
                    href={subcategory.url}
                    className="flex items-center justify-between rounded-full p-2 transition-all hover:bg-background-4"
                  >
                    <span>{subcategory.name[locale]}</span>
                  </Link>
                </li>
              ))}
        </ul>
      )}
    </FloatingMenu>
  );
}
