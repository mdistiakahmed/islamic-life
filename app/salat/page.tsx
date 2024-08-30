import QuoteCard from "@/components/cards/QuoteCard";
import ShareWidget from "@/components/share/ShareWidget";
import { getImportance } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const countries = [
  { name: "Bangladesh", code: "bd" },
  { name: "India", code: "in" },
  { name: "America", code: "us" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "Pakistan", code: "pk" },
];

const SalatPage = async () => {
  const importance = await getImportance("salat");

  const PrayertimeByCountry = () => {
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
                <div className="flex items-center justify-center">
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

        <div className="sm:col-span-2 flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
          <Link
            href={`/salat/salat-time`}
            className="bg-[#004b49] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
          >
            More Countries
          </Link>
        </div>
      </div>
    );
  };

  const ImportanceOfSalat = async () => {
    return (
      <div>
        <h1 className="text-2xl text-center pb-10">
          Importance of Prayer in Islam
        </h1>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
          {importance.slice(0, 5).map((q: any, index: any) => (
            <QuoteCard
              arabic={q.arabic}
              english={q.english}
              source={q.source}
              img={"/quran.svg"}
              key={index}
            />
          ))}
        </div>

        <div className="sm:col-span-2 flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
          <Link
            href={`/salat/importance-of-salat`}
            className="bg-[#004b49] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
          >
            See More
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">
        Essential Islamic Prayers: A Complete Guide to Salah and Worship
      </h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        Explore the fundamentals of Islamic prayers with our detailed guide to
        Salah. Learn about the importance, steps, and benefits of each prayer,
        including Fajr, Dhuhr, Asr, Maghrib, and Isha. Whether you are a
        beginner or looking to deepen your understanding, find everything you
        need to enhance your worship and spiritual connection with Allah.
      </p>
      <ShareWidget />

      <PrayertimeByCountry />

      <ImportanceOfSalat />
    </div>
  );
};

export default SalatPage;
