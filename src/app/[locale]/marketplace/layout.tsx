import ProtectedRoute from "@/components/common/ProtectedRoute/ProtectedRoute";
import TopNavigationBar from "@/components/persistent/TopNavigationBar/TopNavigationBar";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <ProtectedRoute> */}
      <TopNavigationBar />
      {children}
      {/* </ProtectedRoute> */}
    </>
  );
}
