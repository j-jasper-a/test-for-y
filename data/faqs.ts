export type Faq = {
  id: number;
  question: {
    en: string;
    ja: string;
  };
  answer: {
    en: string;
    ja: string;
  };
};

export const faqs: Faq[] = [
  {
    id: 1,
    question: {
      en: "What are VR avatars and fashion products?",
      ja: "VRアバターとファッション製品とは何ですか？",
    },
    answer: {
      en: "VR avatars are digital representations of users in virtual spaces, while VR fashion products include digital clothing and accessories that these avatars can wear in virtual environments.",
      ja: "VRアバターは、バーチャル空間におけるユーザーのデジタルな表現です。VRファッション製品は、これらのアバターがバーチャル環境で着用できるデジタル衣装やアクセサリーを指します。",
    },
  },
  {
    id: 2,
    question: {
      en: "How do I use VR avatars and fashion products?",
      ja: "VRアバターとファッション製品はどのように使用しますか？",
    },
    answer: {
      en: "You can use VR avatars and fashion products by selecting them in compatible virtual environments, such as social VR platforms, games, or metaverse applications.",
      ja: "VRアバターとファッション製品は、ソーシャルVRプラットフォームやゲーム、メタバースアプリケーションなどの対応するバーチャル環境で選択して使用できます。",
    },
  },
  {
    id: 3,
    question: {
      en: "Can I customize my VR avatar and fashion items?",
      ja: "VRアバターやファッションアイテムはカスタマイズできますか？",
    },
    answer: {
      en: "Yes, many VR avatars and fashion items allow for customization, such as changing appearance, clothing, and accessories. Check each product for customization options.",
      ja: "はい、多くのVRアバターやファッションアイテムは、外見や衣装、アクセサリーの変更など、カスタマイズが可能です。各製品のカスタマイズオプションを確認してください。",
    },
  },
  {
    id: 4,
    question: {
      en: "Do I need special hardware to use VR avatars and fashion products?",
      ja: "VRアバターやファッション製品を使用するために特別なハードウェアが必要ですか？",
    },
    answer: {
      en: "Yes, you typically need a VR headset and access to a compatible platform that supports VR avatars and fashion products.",
      ja: "はい、通常、VRアバターやファッション製品をサポートする互換性のあるプラットフォームにアクセスできるVRヘッドセットが必要です。",
    },
  },
  {
    id: 5,
    question: {
      en: "Are VR avatars and fashion products cross-platform compatible?",
      ja: "VRアバターやファッション製品はクロスプラットフォームで使用できますか？",
    },
    answer: {
      en: "Not all VR avatars and fashion products are compatible with every platform. Check the product details for specific platform compatibility before purchasing.",
      ja: "すべてのVRアバターやファッション製品がすべてのプラットフォームで互換性があるわけではありません。購入前に各製品のプラットフォーム互換性を確認してください。",
    },
  },
];
