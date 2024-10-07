"use client";

import MobileLanguageMenu from "@/components/persistent/TopNavigationBar/MobileMenuButton/MobileLanguageMenu/MobileLanguageMenu";
// import ProtectedRoute from "@/components/common/ProtectedRoute/ProtectedRoute";
import MobileMenu from "@/components/persistent/TopNavigationBar/MobileMenuButton/MobileMenu/MobileMenu";
import TopNavigationBar from "@/components/persistent/TopNavigationBar/TopNavigationBar";
import { useMainContext } from "@/providers/Providers";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { closeMenus, mobileMenuOpen } = useMainContext();

  return (
    <div
      className={`${mobileMenuOpen ? "h-screen overflow-hidden" : ""} relative`}
    >
      {/* <ProtectedRoute> */}
      <TopNavigationBar />
      <div onClick={() => closeMenus({})}>{children}</div>
      {/* </ProtectedRoute> */}
      <MobileMenu />
      <MobileLanguageMenu />
    </div>
  );
}
