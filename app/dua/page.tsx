import QuoteCard from "@/components/cards/QuoteCard";
import ShareWidget from "@/components/share/ShareWidget";
import { getDua } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DuaPage = async () => {
  const parentsDua = await getDua("parents");
  const successDua = await getDua("success");
  const earningDua = await getDua("earning");
  const sufferingDua = await getDua("suffering");

  const categoryQuoteSection = (catQuoteList: any, cat: any) => {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-8">
        <div className="flex flex-col items-center">
          <Image
            src={`/${cat.toLowerCase()}.svg`}
            alt={`${cat}`}
            height={40}
            width={40}
            className="h-[200px] w-[200px]"
          />
          <h2 className="text-xl">{cat} Dua</h2>
        </div>
        {catQuoteList.slice(0, 5).map((q: any, index: any) => (
          <QuoteCard
            arabic={q.arabic}
            english={q.english}
            source={q.source}
            img={"/quran.svg"}
            key={index}
          />
        ))}{" "}
        <div className="sm:col-span-2 flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
          <Link
            href={`/dua/${cat.toLowerCase()}`}
            className="bg-[#004b49] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
          >
            More Dua
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">
        Comprehensive Collection of Islamic Duas | Your Guide to Daily Prayers
      </h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        Discover a rich collection of Islamic Duas for every occasion. Learn the
        meaning, significance, and proper recitation of daily prayers,
        supplications, and blessings in Islam. Enhance your spiritual journey
        with our easy-to-follow guide to powerful Duas from the Quran and
        Hadith.
      </p>
      <ShareWidget />
      {categoryQuoteSection(parentsDua, "Parents")}
      {categoryQuoteSection(successDua, "Success")}
      {categoryQuoteSection(earningDua, "Earning")}
      {categoryQuoteSection(sufferingDua, "Suffering")}
    </div>
  );
};

export default DuaPage;
