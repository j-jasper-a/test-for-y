import Image from "next/image";
import Link from "next/link";

export default function BrandBar() {
  return (
    <Link href="/" className="hidden h-8 sm:block">
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="h-full w-auto"
      />
    </Link>
  );
}
