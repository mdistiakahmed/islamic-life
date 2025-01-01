import React from "react";
import Link from "next/link";
import Image from "next/image";
import { countries } from "@/utils/constants";

export default function SalatTimePage() {
  // Quranic verse about time and prayer
  const quranicVerse = {
    arabic: "وَأَقِمِ الصَّلَاةَ لِذِكْرِي",
    translation: "And establish prayer for My remembrance.",
    source: "Quran 20:14",
  };

  return (
    <div className="min-h-screenpy-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
            Global Islamic Prayer Times
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover accurate, location-specific prayer times across the world.
            Ensure you never miss a prayer with our comprehensive,
            geographically-tailored prayer time directory.
          </p>
        </div>

        {/* Quranic Inspiration Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Divine Guidance on Prayer Timing
          </h2>
          <blockquote className="text-xl text-gray-700 italic max-w-4xl mx-auto mb-4">
            "{quranicVerse.translation}"
          </blockquote>
          <p className="text-gray-600 arabic-text text-2xl mb-4">
            {quranicVerse.arabic}
          </p>
          <cite className="block text-gray-500">{quranicVerse.source}</cite>
        </div>

        {/* Country Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <Link
              key={index}
              href={`/salat/salat-time/${country.name.toLowerCase()}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 p-4 flex flex-col items-center">
                <div className="w-20 h-14 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={`https://flagcdn.com/${country.code}.svg`}
                    alt={`${country.name} flag`}
                    width={80}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {country.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        

        {/* Additional Information Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Understanding Prayer Times
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Factors Affecting Prayer Times
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li>• Geographical Location</li>
                <li>• Solar Positioning</li>
                <li>• Seasonal Variations</li>
                <li>• Local Astronomical Calculations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Importance of Accurate Timing
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Precise prayer times are crucial for maintaining spiritual
                discipline and connecting with Allah at the most spiritually
                significant moments of the day.
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Prayer Time Resources Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl shadow-lg p-10">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Advanced Islamic Prayer Time Resources
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Prayer Calculators",
                  description:
                    "Utilize advanced astronomical algorithms to calculate precise prayer times based on your exact geographical coordinates.",
                  icon: "🕰️",
                  keywords: ["Precision", "Technology", "Accuracy"],
                },
                {
                  title: "Qibla Direction Tools",
                  description:
                    "Discover precise Qibla direction using GPS and satellite technology, ensuring accurate orientation for prayer.",
                  icon: "🧭",
                  keywords: [
                    "Navigation",
                    "Orientation",
                    "Spiritual Alignment",
                  ],
                },
                {
                  title: "Seasonal Adjustment Guides",
                  description:
                    "Comprehensive resources for adapting prayer times during varying seasonal changes and geographical locations.",
                  icon: "🌍",
                  keywords: [
                    "Adaptability",
                    "Seasonal Variations",
                    "Global Worship",
                  ],
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="text-5xl mb-4 text-center">
                    {resource.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-4 text-center">
                    {resource.title}
                  </h4>
                  <p className="text-gray-700 mb-4 text-center">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {resource.keywords.map((keyword, keyIndex) => (
                      <span
                        key={keyIndex}
                        className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h4 className="text-2xl font-bold text-blue-900 mb-6">
                Comprehensive Islamic Timing Resources
              </h4>
              <div className="flex justify-center space-x-4">
                {[
                  "Astronomical Calculations",
                  "Global Prayer Schedules",
                  "Spiritual Time Management",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold transform transition-all hover:scale-110"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Key Prayer Time Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Salat Timing",
              "Islamic Prayer Schedule",
              "Global Prayer Times",
              "Qibla Direction",
              "Namaz Timings",
              "Prayer Calculation",
              "Geographical Prayer Times",
              "Islamic Worship Timing",
            ].map((keyword, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold transform transition-all hover:scale-110"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
