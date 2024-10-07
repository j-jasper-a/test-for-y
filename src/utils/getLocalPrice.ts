const EXCHANGE_RATE = 148.75;

export const getLocalPrice = ({
  price,
  locale,
}: {
  price: number;
  locale: string;
}) => {
  if (locale === "ja") {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(price * EXCHANGE_RATE);
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  }).format(price);
};
