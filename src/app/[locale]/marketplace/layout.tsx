"use client";

import ProtectedRoute from "@/components/common/ProtectedRoute/ProtectedRoute";
import TopNavigationBar from "@/components/persistent/TopNavigationBar/TopNavigationBar";
import { useMainContext } from "@/providers/Providers";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { closeMenus } = useMainContext();

  return (
    <>
      {/* <ProtectedRoute> */}
      <TopNavigationBar />
      <div onClick={() => closeMenus({})}>{children}</div>
      {/* </ProtectedRoute> */}
    </>
  );
}
