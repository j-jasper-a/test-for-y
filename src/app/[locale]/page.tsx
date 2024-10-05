import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("pages.home");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
