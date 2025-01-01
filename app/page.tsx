import ShareWidget from "@/components/share/ShareWidget";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div className="w-full max-w-4xl flex flex-col items-center gap-8 text-center">
        <h1 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight"
          aria-label="Islamic Life Comprehensive Guide"
        >
          Islamic Life: Comprehensive Guide to Spiritual Practices
        </h1>

        <p 
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
          aria-describedby="site-description"
        >
          Embark on a transformative journey through Islamic spiritual practices. 
          Our comprehensive resource provides in-depth insights into Salat (Prayer), 
          Sawm (Fasting), Hajj (Pilgrimage), and Zakat (Charity). Discover authentic 
          guidance rooted in the Quran and Hadith, helping you deepen your understanding 
          and practice of Islamic principles.
        </p>

        <ShareWidget />

        <div className="flex items-center justify-center">
          <Image
            src="/main_image.jpg"
            alt="Islamic Spiritual Practices Illustration"
            width={400}
            height={200}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

                {/* Islamic Principles and Quranic Wisdom Section */}
                <div className="w-full bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
              Essence of Islam: Quranic Wisdom and Principles
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Core Beliefs Section */}
              <div className="bg-green-50 rounded-xl p-8 shadow-md transform transition-all hover:scale-105">
                <h3 className="text-2xl font-semibold text-green-700 mb-6">
                  Fundamental Beliefs (العقيدة)
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold text-green-600 mb-3">
                      Tawhid (التوحيد) - Oneness of Allah
                    </h4>
                    <p className="text-gray-700 mb-4 italic">
                      "There is no god but Allah"
                    </p>
                    <p className="text-gray-600 arabic-text">
                      لَا إِلٰهَ إِلَّا اللهُ
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold text-green-600 mb-3">
                      Prophethood (النبوة)
                    </h4>
                    <blockquote className="text-gray-700 italic mb-4">
                      "Muhammad is the Messenger of Allah"
                    </blockquote>
                    <p className="text-gray-600 arabic-text">
                      مُحَمَّدٌ رَسُولُ اللهِ
                    </p>
                  </div>
                </div>
              </div>

              {/* Quranic Verses Section */}
              <div className="bg-blue-50 rounded-xl p-8 shadow-md transform transition-all hover:scale-105">
                <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                  Inspirational Quranic Verses (آيات قرآنية)
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold text-blue-600 mb-3">
                      Mercy and Compassion
                    </h4>
                    <p className="text-gray-600 arabic-text mb-4">
                      وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ
                    </p>
                    <p className="text-gray-700 italic">
                      "My mercy encompasses all things" (Quran 7:156)
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold text-blue-600 mb-3">
                      Knowledge and Reflection
                    </h4>
                    <p className="text-gray-600 arabic-text mb-4">
                      هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ
                    </p>
                    <p className="text-gray-700 italic">
                      "Are those who know equal to those who do not know?" (Quran 39:9)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Islamic Values Summary */}
            <div className="mt-12 bg-gray-100 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Core Values of Islam
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Compassion', 
                  'Justice', 
                  'Knowledge', 
                  'Patience', 
                  'Gratitude', 
                  'Mercy'
                ].map((value, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold transform transition-all hover:scale-110"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 py-12">
          {/* Salat (Prayer) Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Salat (Prayer)</h2>
            <p className="text-gray-700 leading-relaxed">
              Salat is the cornerstone of Islamic worship, connecting believers directly with Allah. 
              Performed five times daily, it provides spiritual discipline, inner peace, and a constant 
              reminder of divine guidance. Each prayer is a moment of reflection, gratitude, and 
              spiritual renewal.
            </p>
          </div>

          {/* Sawm (Fasting) Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Sawm (Fasting)</h2>
            <p className="text-gray-700 leading-relaxed">
              Fasting during Ramadan is a profound spiritual practice of self-discipline and empathy. 
              It teaches patience, compassion, and gratitude while purifying the soul and strengthening 
              community bonds. From dawn to sunset, Muslims abstain from food and drink, focusing on 
              spiritual growth.
            </p>
          </div>

          {/* Hajj Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Hajj (Pilgrimage)</h2>
            <p className="text-gray-700 leading-relaxed">
              The Hajj is a transformative journey to Mecca, undertaken at least once by those physically 
              and financially able. It symbolizes unity, equality, and submission to Allah. Pilgrims 
              from around the world come together, wearing simple white garments, demonstrating the 
              universal brotherhood of Islam.
            </p>
          </div>

          {/* Zakat (Charity) Section */}
          <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Zakat (Charity)</h2>
            <p className="text-gray-700 leading-relaxed">
              Zakat is a mandatory form of giving that purifies wealth and supports community welfare. 
              Muslims give 2.5% of their savings annually to help the poor, needy, and vulnerable. 
              This practice promotes social justice, empathy, and economic balance within the community.
            </p>
          </div>
        </div>

        {/* Dua (Supplication) Section */}
        <div className="w-full bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dua: The Power of Supplication</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dua is the intimate conversation between a believer and Allah. More than just a prayer, 
              it is a profound expression of trust, hope, and surrender. Through Dua, Muslims seek 
              guidance, express gratitude, and find solace in every aspect of life.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Seeking Guidance', 'Expressing Gratitude', 'Finding Peace'].map((title, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-md rounded-lg p-5 transform transition-all hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">{title}</h3>
                  <p className="text-gray-600">
                    A powerful way to connect with the divine, reflecting the essence of spiritual 
                    communication in Islam.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}