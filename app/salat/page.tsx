import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SalatPage() {
  const salatPillars = [
    {
      title: "Fajr (الفجر)",
      description:
        "The dawn prayer, performed before sunrise, symbolizing spiritual awakening and connection with Allah.",
      time: "Before Sunrise",
      arabicName: "صلاة الفجر",
      importance:
        "Represents the beginning of the day and spiritual consciousness.",
    },
    {
      title: "Dhuhr (الظهر)",
      description:
        "The noon prayer, performed when the sun passes its zenith, signifying midday reflection and pause.",
      time: "Midday",
      arabicName: "صلاة الظهر",
      importance: "A moment of spiritual renewal amidst daily activities.",
    },
    {
      title: "Asr (العصر)",
      description:
        "The afternoon prayer, performed in the late afternoon, representing perseverance and patience.",
      time: "Late Afternoon",
      arabicName: "صلاة العصر",
      importance: "Teaches steadfastness and commitment to faith.",
    },
    {
      title: "Maghrib (المغرب)",
      description:
        "The sunset prayer, performed just after the sun sets, marking the end of the day's spiritual journey.",
      time: "After Sunset",
      arabicName: "صلاة المغرب",
      importance: "Reflects gratitude and transition from day to evening.",
    },
    {
      title: "Isha (العشاء)",
      description:
        "The night prayer, performed after the sky has darkened, symbolizing peace and spiritual reflection.",
      time: "Night",
      arabicName: "صلاة العشاء",
      importance: "Concludes the day with tranquility and divine connection.",
    },
  ];

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
            Salat: The Spiritual Cornerstone of Islamic Worship
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the profound spiritual significance of Salat, the second
            pillar of Islam. A divine connection that transcends time and space,
            guiding believers towards spiritual enlightenment and inner peace.
          </p>
        </div>

        {/* Salat Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {salatPillars.map((salat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6"
            >
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-green-600 mr-4">
                  {salat.title}
                </h2>
                <span className="text-gray-500 text-sm">{salat.time}</span>
              </div>
              <p className="text-gray-700 mb-4">{salat.description}</p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-gray-600 arabic-text text-right">
                  {salat.arabicName}
                </p>
                <p className="text-sm text-green-700 italic">
                  {salat.importance}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quranic Verse Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">
            Quranic Guidance on Salat
          </h3>
          <blockquote className="text-xl text-gray-700 italic max-w-4xl mx-auto mb-6">
            "Indeed, the prayer has been decreed upon the believers a decree of
            specified times."
          </blockquote>
          <p className="text-gray-600 arabic-text text-2xl">
            إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
          </p>
          <cite className="block mt-4 text-gray-500">- Quran 4:103</cite>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Key Aspects of Salat
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Prayer Times",
              "Islamic Worship",
              "Spiritual Connection",
              "Daily Prayers",
              "Namaz",
              "Salah",
              "Qibla Direction",
              "Islamic Rituals",
              "Spiritual Discipline",
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

        {/* Additional Resources Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Salat Time Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="p-6 bg-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Prayer Times Worldwide
                </h3>
                <p className="text-blue-100">
                  Discover accurate prayer times for countries around the globe.
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Access precise prayer times tailored to your location. Ensure
                  you never miss a prayer with our comprehensive global prayer
                  time directory.
                </p>
                <Link
                  href="/salat/salat-time"
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
                >
                  Find Prayer Times
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 inline-block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Importance of Salat Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="p-6 bg-green-600 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Spiritual Significance of Salat
                </h3>
                <p className="text-green-100">
                  Explore the profound meaning behind Islamic prayers.
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Dive deep into the spiritual, psychological, and social
                  dimensions of Salat. Understand how prayer transforms
                  individual and community life in Islam.
                </p>
                <Link
                  href="/salat/importance-of-salat"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 inline-block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
