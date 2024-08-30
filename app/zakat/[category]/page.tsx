import QuoteCard from "@/components/cards/QuoteCard";
import { getImportance } from "@/utils/getData";
import React from "react";

const ZakatCategoryPage = async ({ params }: any) => {
  const { category } = params;
  const importance = await getImportance("zakat");
  return (
    <div>
      <h1 className="text-2xl text-center pb-10">
        Importance of Zakat in Islam
      </h1>

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {importance.map((q: any, index: any) => (
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

export default ZakatCategoryPage;
