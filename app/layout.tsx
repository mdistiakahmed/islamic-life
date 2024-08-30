import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/footer/Footer";
import HeaderComponent from "@/components/navbar/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Islamic Life: Salat Times, Importance of Salat, Sawm, Hajj, Zakat, and Duas from Quran and Hadith",
  description:
    "Explore the Islamic way of life with accurate Salat times, in-depth articles on the importance of Salat, Sawm, Hajj, and Zakat, and a curated collection of Duas from the Quran and Hadith. Enhance your spiritual journey with guidance from authentic Islamic teachings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <HeaderComponent />
          <div>{children}</div>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
