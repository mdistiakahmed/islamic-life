import React from "react";

const SalatTimeDescription = ({ cityName, prayerTimesArray }: any) => {
  const prayerTimes = prayerTimesArray.reduce((acc: any, prayer: any) => {
    const key = prayer.name.toLowerCase();
    acc[key] = prayer.schedule.start;
    return acc;
  }, {});

  console.log(prayerTimes);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <p className="mb-6 text-gray-700">
        Prayer times in {cityName} for today are as follows: Fajr at{" "}
        {prayerTimes.fazr}, Dhuhr at {prayerTimes.zuhr}, Asr at{" "}
        {prayerTimes.asr}, Maghrib at {prayerTimes.maghrib}, and Isha at{" "}
        {prayerTimes.isha}. These prayer times are updated daily to ensure
        accuracy for the Muslim community in {cityName}.
      </p>
    </div>
  );
};

export default SalatTimeDescription;
