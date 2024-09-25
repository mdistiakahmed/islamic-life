import { countries } from "@/utils/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: `Prayer Times Worldwide: Accurate Schedules for Every Country | IslamicTablig`,
  description: `Discover the exact prayer times for your location. Our user-friendly tool makes it easy to find daily prayer schedules worldwide.`,
  openGraph: {
    title: `Prayer Times Worldwide: Accurate Schedules for Every Country | IslamicTablig`,
    description: `Discover the exact prayer times for your location. Our user-friendly tool makes it easy to find daily prayer schedules worldwide.`,
    type: "article",
    locale: "en_US",
    url: `https://www.islamictablig.com/salat/salat-time`,
    siteName: "IslamicTablig",
    images: [
      {
        url: "/share.jpg",
        width: 1200,
        height: 630,
        alt: "Mosque",
      },
    ],
  },
};

const SalatTimePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-4">
        Prayer Time By Country
      </h1>
      <p className="text-lg text-center py-5">
        Discover the exact prayer times for your location. Our user-friendly
        tool makes it easy to find daily prayer schedules worldwide.Stay
        connected to your faith with accurate prayer times. Our reliable service
        provides precise schedules for Muslims around the globe.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {countries.map((c, index) => (
          <Link
            href={`/salat/salat-time/${c.name.toLowerCase()}`}
            key={index}
            className="p-[24px] border-2 flex item-center justify-center cursor-pointer bg-gray-200 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="flex  items-center justify-center">
                <Image
                  alt={"C"}
                  height={10}
                  width={10}
                  className="w-auto h-8"
                  src={`https://flagcdn.com/${c.code}.svg`}
                />
              </div>

              <div className="flex items-center justify-center">
                <span className="text-center">{c.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-xl text-center pt-5 font-bold">
        Factors Affecting Prayer Times
      </h2>
      <p className="text-lg text-center py-5">
        Prayer times vary significantly across different countries due to
        geographical location, time zone differences, and cultural practices.
        Muslims, for example, follow a specific schedule based on the position
        of the sun. This means that prayer times can differ even between nearby
        cities.
      </p>
      <h2 className="text-xl text-center pt-5 font-bold">
        Finding Accurate Prayer Times
      </h2>
      <p className="text-lg text-center py-5">
        Thanks to modern technology, it is easier than ever to find accurate
        prayer times for any location. There are numerous online resources,
        mobile apps, and dedicated websites that provide detailed schedules for
        various Islamic prayers like Fajr, Dhuhr, Asr, Maghrib, and Isha.
      </p>
    </div>
  );
};

export default SalatTimePage;
