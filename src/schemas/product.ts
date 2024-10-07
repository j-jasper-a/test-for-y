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

export const Categories: Record<string, { en: string; ja: string }> = {
  avatars: { en: "Avatars", ja: "アバター" },
  fashion: { en: "Fashion", ja: "ファッション" },
};

export const SubCategories: Record<string, { en: string; ja: string }> = {
  human_like: { en: "Human-like", ja: "人間的" },
  anthro_furry: { en: "Anthro & Furry", ja: "ケモノ" },
  robot_cyborgs: { en: "Robot & Cyborgs", ja: "ロボット・サイボーグ" },
  clothes: { en: "Clothes", ja: "服" },
  accessories: { en: "Accessories", ja: "アクセサリー" },
  others: { en: "Others", ja: "その他" },
};

export const Platforms: Record<string, { en: string; ja: string }> = {
  vrchat_quest: { en: "VRChat Quest", ja: "VRChat Quest" },
  vrchat_pcvr: { en: "VRChat PCVR", ja: "VRChat PCVR" },
  spatial: { en: "Spatial", ja: "Spatial" },
  chilloutvr: { en: "ChilloutVR", ja: "ChilloutVR" },
  resonite: { en: "Resonite", ja: "Resonite" },
  neos_vr: { en: "Neos VR", ja: "Neos VR" },
  cluster: { en: "Cluster VR", ja: "Cluster VR" },
  virtual_cast: { en: "Virtual Cast", ja: "Virtual Cast" },
  others: { en: "Others", ja: "その他" },
};
