import Clock from "@/components/clock/Clock";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const countries = [
  { name: "Bangladesh", code: "bd" },
  { name: "India", code: "in" },
  { name: "America", code: "us" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "Pakistan", code: "pk" },
  { name: "England", code: "gb" },
  { name: "Australia", code: "au" },
  { name: "Malaysia", code: "my" },
  { name: "Indonasia", code: "id" },
  { name: "Canada", code: "ca" },
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
    </div>
  );
};

export default SalatTimePage;
