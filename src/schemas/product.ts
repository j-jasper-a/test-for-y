export type ProductType =
  | {
      id: string;
      name: "Product name";
      creator: "Creator name";
      category: "avatar";
      subcategory: "human_like" | "anthro_furry" | "robot_cyborgs" | "others";
      price: 10.5;
      ratings: 5;
    }
  | {
      id: string;
      name: "Product name";
      creator: "Creator name";
      category: "fashion";
      subcategory: "clothes" | "accessories" | "others";
      price: 10.5;
      ratings: 5;
    };
