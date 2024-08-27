import { countries } from "@/utils/prayerTimeCountries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SalatPage = () => {
  const countrySection = (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">Prayer Time By Country</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-[40px] cursor-pointer">
        {countries.map((c, index) => {
          const mediumBgClass =
            index % 2 === 0
              ? "bg-[#f06246] hover:bg-[#f3917d]"
              : "bg-[#006fee] hover:bg-[#88b3e3]";
          return (
            <Link href={`/country/${c.name.toLocaleLowerCase()}`} key={index}>
              <div
                className={`h-[180px] w-[250px] rounded-xl flex flex-col gap-2 items-center justify-center text-white hover:text-black bg-gray-300`}
              >
                <Image
                  alt={"C"}
                  height={20}
                  width={20}
                  className="w-auto h-20"
                  src={`https://flagcdn.com/${c.code}.svg`}
                />
                <p className="text-xl text-center text-black">
                  {c.name} Prayer Time
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return <div className="flex flex-col gap-5">{countrySection}</div>;
};

export default SalatPage;
