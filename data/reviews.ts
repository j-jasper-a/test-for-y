export type ReviewType = {
  id: number;
  name: string;
  ratings: number;
  comment: string;
};

export const reviews: ReviewType[] = [
  {
    id: 1,
    name: "John Smith",
    ratings: 4.8,
    comment:
      "I love the attention to detail in this. Trust me, this looks a lot better in VR than it does in the images here.",
  },
  {
    id: 2,
    name: "佐藤 健",
    ratings: 4.7,
    comment:
      "細部までこだわりが感じられる。写真よりもVRで見る方がはるかに素晴らしい。",
  },
  {
    id: 3,
    name: "Emily Johnson",
    ratings: 4.9,
    comment:
      "The immersive experience was unreal. It's definitely worth every penny.",
  },
  {
    id: 4,
    name: "山田 太郎",
    ratings: 4.6,
    comment:
      "現実にいるかのような没入感が素晴らしかった。お金をかける価値はある。",
  },
  {
    id: 5,
    name: "Michael Brown",
    ratings: 4.5,
    comment:
      "Fantastic quality and user-friendly interface. I'm very impressed.",
  },
  {
    id: 6,
    name: "田中 花子",
    ratings: 4.8,
    comment:
      "素晴らしいクオリティと使いやすいインターフェース。とても感動しました。",
  },
  {
    id: 7,
    name: "Jessica Davis",
    ratings: 4.7,
    comment:
      "It exceeded all my expectations. The visuals were stunning, and the experience was smooth.",
  },
  {
    id: 8,
    name: "斎藤 一郎",
    ratings: 4.9,
    comment: "期待以上の体験でした。映像は見事で、操作もスムーズでした。",
  },
  {
    id: 9,
    name: "David Wilson",
    ratings: 4.6,
    comment:
      "Very immersive and well-designed. This is going to be my go-to VR experience.",
  },
  {
    id: 10,
    name: "高橋 涼子",
    ratings: 4.7,
    comment:
      "非常に没入感があり、デザインも素晴らしい。これからのVR体験はこれが定番になりそう。",
  },
];
