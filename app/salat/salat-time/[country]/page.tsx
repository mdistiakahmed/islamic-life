import FiveQaqtSalatComponent from "@/components/FiveQaqtSalatComponent";
import { capitalize } from "@/utils/converters";
import { getPrayerTime } from "@/utils/getData";
import Link from "next/link";
import React from "react";

const CountryPrayerTimePage = async ({ params }: any) => {
  const { country } = params;
  const prayerTime = await getPrayerTime(country);
  const capitalCity = prayerTime.capital;
  const capitalCityPrayerTime = prayerTime.schedule[capitalCity];
  const cities = prayerTime.cities;

  return (
    <div>
      <FiveQaqtSalatComponent
        cityPrayerTime={capitalCityPrayerTime}
        city={`${country} (${capitalCity})`}
      />
      <h1 className="text-xl font-bold text-center py-4">
        {capitalize(country)} Prayer Time By City
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {cities.map((c: any, index: any) => (
          <Link
            href={`/salat/salat-time/${country}/${c.toLowerCase()}`}
            key={index}
            className="p-[24px] border-2 flex item-center justify-center cursor-pointer"
          >
            <span>{capitalize(c)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryPrayerTimePage;
