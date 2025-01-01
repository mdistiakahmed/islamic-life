import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/footer/Footer";
import HeaderComponent from "@/components/navbar/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Islamic Life: Comprehensive Guide to Spiritual Practices',
  description: 'Discover the essence of Islamic life through comprehensive guides on Salat, Sawm, Hajj, and Zakat. Learn about Islamic principles, Quranic wisdom, and spiritual growth.',
  verification: {
    google: "zn4ZgU5utQkPo6QKWBNjy8oY9jUR1UZs6Ip1Dh43V4E",
  },
  openGraph: {
    title: 'Islamic Life: Your Spiritual Journey',
    description: 'Explore the depth of Islamic practices, from prayer to charity. A comprehensive guide to understanding and practicing Islam.',
    url: 'https://www.islamiclife.com',
    siteName: 'Islamic Life',
    images: [
      {
        url: '/main_image.jpg',
        width: 400,
        height: 200,
        alt: 'Islamic Spiritual Practices Illustration'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Islamic Life: Your Spiritual Journey',
    description: 'Explore the depth of Islamic practices, from prayer to charity.',
    images: ['/main_image.jpg']
  },
  keywords: [
    'Islam', 'Salat', 'Prayer', 'Sawm', 'Fasting', 
    'Hajj', 'Pilgrimage', 'Zakat', 'Charity', 
    'Quranic Wisdom', 'Islamic Principles'
  ]
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-TM5M4Q7F83" />
      <body className={`${inter.className}  bg-[url('/snowflakes.png')]`}>
        <NextUIProvider>
          <HeaderComponent />
          <div>{children}</div>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
