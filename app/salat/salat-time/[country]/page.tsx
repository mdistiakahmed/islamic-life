import Link from "next/link";
import React from "react";

const CountryPrayerTimePage = () => {
  const cities = ["Dhaka", "Chattagram", "Sylhet", "Rajhsahi"];
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-4">
        Prayer Time By City
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {cities.map((c, index) => (
          <Link
            href={`/salat/salat-time/bangladesh/${c.toLowerCase()}`}
            key={index}
            className="p-[24px] border-2 flex item-center justify-center cursor-pointer"
          >
            <span>{c}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryPrayerTimePage;
