export type ProductType =
  | {
      id: string;
      name: "Product name";
      creator: "Creator name";
      category: "avatars";
      subcategory: "human_like" | "anthro_furry" | "robot_cyborgs" | "others";
      platform: Array<
        | "vrchat_quest"
        | "vrchat_pcvr"
        | "spatial"
        | "chilloutvr"
        | "resonite"
        | "neos_vr"
        | "cluster"
        | "virtual_cast"
        | "others"
      >;
      price: number;
      ratings: 5;
    }
  | {
      id: string;
      name: "Product name";
      creator: "Creator name";
      category: "fashion";
      subcategory: "clothes" | "accessories" | "others";
      platform: Array<
        | "vrchat_quest"
        | "vrchat_pcvr"
        | "spatial"
        | "chilloutvr"
        | "resonite"
        | "neos_vr"
        | "cluster"
        | "virtual_cast"
        | "others"
      >;
      price: number;
      ratings: 5;
    };

export const Categories = {
  avatars: { en: "Avatars", ja: "アバター" },
  fashion: { en: "Fashion", ja: "ファッション" },
};

export const SubCategories = {
  human_like: { en: "Human-like", ja: "人間のような" },
  anthro_furry: { en: "Anthro & Furry", ja: "アントロ・ケモノ" },
  robot_cyborgs: { en: "Robot & Cyborgs", ja: "ロボット・サイボーグ" },
  clothes: { en: "Clothes", ja: "服" },
  accessories: { en: "Accessories", ja: "アクセサリー" },
  others: { en: "Others", ja: "その他" },
};
