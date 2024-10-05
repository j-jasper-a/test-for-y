import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter as FontMain } from "next/font/google";

const fontMain = FontMain({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "TestTown | The Marketplace",
  description: "TestTown is a marketplace for VR avatars.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${fontMain.className} relative bg-background-1 text-white antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
