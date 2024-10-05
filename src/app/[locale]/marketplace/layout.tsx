import TopNavigationBar from "@/components/persistent/TopNavigationBar/TopNavigationBar";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigationBar />
      {children}
    </>
  );
}
