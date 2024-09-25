import FiveQaqtSalatComponent from "@/components/FiveQaqtSalatComponent";
import { capitalize } from "@/utils/converters";
import { getPrayerTime } from "@/utils/getData";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { country } = params;

  return {
    title: `Muslim Prayer Times in ${country}: Your Reliable Guide to Daily Salah | IslamicTablig`,
    description: `Discover the exact times for Fajr, Dhuhr, Asr, Maghrib, and Isha in ${country}. Our user-friendly tool makes it easy to find daily prayer schedules`,
    openGraph: {
      title: `Muslim Prayer Times in ${country}: Your Reliable Guide to Daily Salah | IslamicTablig`,
      description: `Discover the exact times for Fajr, Dhuhr, Asr, Maghrib, and Isha in ${country}. Our user-friendly tool makes it easy to find daily prayer schedules`,
      type: "article",
      locale: "en_US",
      url: `https://www.islamictablig.com/salat/salat-time/${country}`,
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
}

const CountryPrayerTimePage = async ({ params }: any) => {
  const { country } = params;
  const prayerTime = await getPrayerTime(country);
  const capitalCity = prayerTime.capital;
  const capitalCityPrayerTime = prayerTime.schedule[capitalCity];
  const cities = prayerTime.cities;

  return (
    <div>
      <h1 className="text-xl text-center">
        Muslim Prayer Times in {capitalize(country)}: Your Reliable Guide to
        Daily Salah
      </h1>
      <FiveQaqtSalatComponent
        cityPrayerTime={capitalCityPrayerTime}
        city={`${country} (${capitalCity})`}
      />
      <p className="text-md text-center py-2">
        Discover the exact times for Fajr, Dhuhr, Asr, Maghrib, and Isha in{" "}
        {country}. Our user-friendly tool makes it easy to find daily prayer
        schedules.
      </p>
      <h1 className="text-xl font-bold text-center py-4">
        {capitalize(country)} Prayer Time By City
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cities.map((c: any, index: any) => (
          <Link
            href={`/salat/salat-time/${country}/${c.toLowerCase()}`}
            key={index}
            className="p-[24px] border-2 flex item-center justify-center cursor-pointer"
          >
            <span>{capitalize(c)} prayer time</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryPrayerTimePage;
