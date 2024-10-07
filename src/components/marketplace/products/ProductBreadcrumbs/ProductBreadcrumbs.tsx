import { Categories, ProductType, SubCategories } from "@/schemas/product";
import Link from "next/link";

type ProductBreadcrumbsProps = {
  locale: string;
  product: ProductType;
};

export default function ProductBreadcrumbs({
  locale,
  product,
}: ProductBreadcrumbsProps) {
  const breadcrumbs = [
    {
      name: locale === "ja" ? "すべて" : "All",
      href: "/marketplace",
    },
    {
      name:
        locale === "ja"
          ? Categories[product.category].ja
          : Categories[product.category].en,
      href: "/marketplace?category=" + product.category,
    },
    {
      name:
        locale === "ja"
          ? SubCategories[product.subcategory].ja
          : SubCategories[product.subcategory].en,
      href:
        "/marketplace?category=" +
        product.category +
        "&subcategory=" +
        product.subcategory,
    },
    {
      name: "",
      href: "",
    },
  ];

  return (
    <div className="flex items-center text-base font-bold">
      {breadcrumbs.map((breadcrumb, index) => (
        <Link
          href={breadcrumb.href}
          key={breadcrumb.name}
          className="flex items-center transition-all hover:text-accent"
        >
          <span key={breadcrumb.name}>{breadcrumb.name}</span>
          {index < breadcrumbs.length - 1 && (
            <span className="px-1 opacity-50">{`>`}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
