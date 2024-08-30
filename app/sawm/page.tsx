import QuoteCard from "@/components/cards/QuoteCard";
import ShareWidget from "@/components/share/ShareWidget";
import { getImportance } from "@/utils/getData";
import Link from "next/link";
import React from "react";

const SawmPage = async () => {
  const importance = await getImportance("sawm");
  const ImportanceOfSalat = async () => {
    return (
      <div>
        <h1 className="text-2xl text-center pb-10">
          Importance of Sawm in Islam
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
            href={`/sawm/importance-of-sawm`}
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
        Understanding Sawm: A Complete Guide to Islamic Fasting
      </h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        Dive deep into the spiritual practice of Sawm, the Islamic act of
        fasting during Ramadan and beyond. Learn about the significance, rules,
        benefits, and types of fasting in Islam. Discover how fasting purifies
        the soul, strengthens faith, and brings you closer to Allah. Perfect for
        those looking to understand or observe this important pillar of Islam.
      </p>
      <ShareWidget />

      <ImportanceOfSalat />
    </div>
  );
};

export default SawmPage;
