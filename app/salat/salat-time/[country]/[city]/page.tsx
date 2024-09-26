import FiveQaqtSalatComponent from "@/components/FiveQaqtSalatComponent";
import ThisMonthPrayerTime from "@/components/ThisMonthPrayerTime";
import { capitalize } from "@/utils/converters";
import { getPrayerTime } from "@/utils/getData";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const { country, city } = params;

  const capCity = capitalize(city);

  return {
    title: `${capCity} Prayer Times: Accurate Schedules for Daily Salat`,
    description: `Get precise prayer times for ${city}. Our comprehensive database ensures accurate schedules for all five daily prayers. Stay connected to your faith with our reliable service.`,
    openGraph: {
      title: `${capCity} Prayer Times: Accurate Schedules for Daily Salat`,
      description: `Get precise prayer times for ${city}. Our comprehensive database ensures accurate schedules for all five daily prayers. Stay connected to your faith with our reliable service.`,
      type: "article",
      locale: "en_US",
      url: `https://www.islamictablig.com/salat/salat-time/${country}/${city}`,
      siteName: "IslamicTablig",
      images: [
        {
          url: "/share.jpg",
          width: 1200,
          height: 630,
          alt: "Mosque",
        },
      ],
    },
  };
}

const CityPrayerTimePage = async ({ params }: any) => {
  const { country, city } = params;
  const prayerTime = await getPrayerTime(country);
  const currentCityPrayerTime = prayerTime.schedule[city];
  return (
    <div>
      <FiveQaqtSalatComponent
        cityPrayerTime={currentCityPrayerTime}
        city={city}
      />

      <p className="text-center py-4">
        Get precise prayer times for {city}. Our comprehensive database ensures
        accurate schedules for all five daily prayers. Stay connected to your
        faith with our reliable service.
      </p>

      <ThisMonthPrayerTime cityPrayerTime={currentCityPrayerTime} city={city} />

      <h2 className="text-xl font-bold text-center py-8">
        Prayer time in other cities of {capitalize(country)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {prayerTime.cities.map((c: any, index: any) => (
          <Link
            href={`/salat/salat-time/${country}/${c.toLowerCase()}`}
            key={index}
            className="p-[24px] border-2 flex item-center justify-center cursor-pointer"
          >
            <span>{capitalize(c)} prayer time</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CityPrayerTimePage;
