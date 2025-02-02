import QuoteCard from "@/components/cards/QuoteCard";
import ShareWidget from "@/components/share/ShareWidget";
import { getImportance } from "@/utils/getData";
import Link from "next/link";

const QuranPage = async () => {
  const importance = await getImportance("quran");
  const ImportanceOfSalat = async () => {
    return (
      <div>
        <h1 className="text-2xl text-center pb-10">
          Importance of Quran in Islam
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

        {/* <div className="sm:col-span-2 flex items-center justify-end p-5 mr-[60px] md:mr-[80px]">
          <Link
            href={`/hajj/importance-of-hajj`}
            className="bg-[#004b49] hover:bg-[#f8c194] hover:text-black p-2 px-5 text-white font-bold relative custom-botton"
          >
            See More
          </Link>
        </div> */}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">
        Quran: A Divine Guidance for Humanity
      </h1>
      <p className="text-center text-lg leading-relaxed text-gray-800 mt-4">
        Discover the profound wisdom and guidance of the Quran, the holy book of
        Islam. Explore its teachings, significance, and impact on the lives of
        millions. Whether you seek spiritual enlightenment, moral direction, or
        a deeper understanding of faith, immerse yourself in the timeless words
        of the Quran and uncover its transformative power.
      </p>

      <ShareWidget />

      <ImportanceOfSalat />
    </div>
  );
};

export default QuranPage;
