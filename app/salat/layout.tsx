import SecondaryHeader from "@/components/navbar/SecondaryHeader";
import { categoryMap } from "@/utils/constants";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Islamic Salat Guide: Prayer Times, Significance, and Spiritual Practices',
  description: 'Comprehensive guide to Salat (Islamic Prayer). Explore detailed insights into prayer times, spiritual significance, importance of each prayer, and the transformative power of daily worship.',
  keywords: [
    'Salat', 'Islamic Prayer', 'Prayer Times', 'Fajr', 'Dhuhr', 
    'Asr', 'Maghrib', 'Isha', 'Namaz', 'Spiritual Practices', 
    'Islamic Worship', 'Prayer Significance'
  ],
  openGraph: {
    title: 'Salat: The Spiritual Cornerstone of Islamic Worship',
    description: 'Discover the profound spiritual significance of Salat, the second pillar of Islam.',
    url: 'https://www.islamiclife.com/salat',
    siteName: 'Islamic Life',
    images: [
      {
        url: '/main_image.jpg',
        width: 400,
        height: 200,
        alt: 'Islamic Prayer Illustration'
      }
    ],
    locale: 'en_US',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salat: Understanding Islamic Prayer',
    description: 'A comprehensive guide to the spiritual practice of Salat',
    images: ['/main_image.jpg']
  },
  alternates: {
    canonical: 'https://www.islamiclife.com/salat'
  }
}


export default function SalatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subNavList = categoryMap.salat;

  return (
    <section>
      <SecondaryHeader subNavList={subNavList} />
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] py-[20px]">{children}</div>
      </div>
    </section>
  );
}
