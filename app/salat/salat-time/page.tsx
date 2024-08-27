import Clock from "@/components/clock/Clock";
import Link from "next/link";
import React from "react";

const countries = [
  { name: "Bangladesh" },
  { name: "India" },
  { name: "America" },
  { name: "United Arab Emirates" },
  { name: "Pakistan" },
  { name: "England" },
  { name: "Australia" },
  { name: "Malaysia" },
  { name: "Indonasia" },
  { name: "Canada" },
];

const SalatTimePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-4">
        Prayer Time By Country
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {countries.map((c, index) => (
          <Link
            href={`/salat/salat-time/${c.name.toLowerCase()}`}
            key={index}
            className="p-[24px] border-2 flex item-center justify-center cursor-pointer"
          >
            <span>{c.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SalatTimePage;
