import ShareWidget from "@/components/share/ShareWidget";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-[95vw] md:w-[70vw] py-[20px] flex flex-col gap-10">
        <h1 className="text-2xl  text-center">
          Islamic Life: Your Guide to Prayer, Fasting, Charity, and Pilgrimage
        </h1>

        <p className="text-center text-lg leading-relaxed text-gray-800">
          Discover the essence of Islamic life through comprehensive guides on
          Salat, Sawm, Hajj, and Zakat, grounded in the teachings of the Quran
          and Hadith. Learn the importance of each pillar, find accurate prayer
          times, and explore a collection of powerful Duas for every occasion,
          directly from the Quran and Hadith.
        </p>
        <ShareWidget />

        <div className="flex items-center justify-center">
          <Image
            src={"/main_image.jpg"}
            alt="nature"
            height={100}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
