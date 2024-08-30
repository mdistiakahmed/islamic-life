import QuoteCard from "@/components/cards/QuoteCard";
import { getDua } from "@/utils/getData";
import React from "react";

const DuaCategoryPage = async ({ params }: any) => {
  const { category } = params;
  const dua = await getDua(category);
  return (
    <div>
      <h1 className="text-2xl text-center pb-10">Dua for {category}</h1>

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {dua.map((q: any, index: any) => (
          <QuoteCard
            arabic={q.arabic}
            english={q.english}
            source={q.source}
            img={"/quran.svg"}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default DuaCategoryPage;
