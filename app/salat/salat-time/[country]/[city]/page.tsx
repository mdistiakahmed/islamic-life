import FiveQaqtSalatComponent from "@/components/FiveQaqtSalatComponent";
import ThisMonthPrayerTime from "@/components/ThisMonthPrayerTime";
import { getPrayerTime } from "@/utils/getData";
import React from "react";

const CityPrayerTimePage = async ({ params }: any) => {
  const { country, city } = params;
  const prayerTime = await getPrayerTime(country);
  const currentCityPrayerTime = prayerTime.schedule[city];
  return (
    <div>
      <FiveQaqtSalatComponent
        cityPrayerTime={currentCityPrayerTime}
        city={city}
      />

      <ThisMonthPrayerTime cityPrayerTime={currentCityPrayerTime} city={city} />
    </div>
  );
};

export default CityPrayerTimePage;
