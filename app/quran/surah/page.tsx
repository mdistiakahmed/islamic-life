import { fetchLessons } from "@/services/getLessons";

const Page = async () => {
  let lessons = await fetchLessons("quran");
  lessons = lessons.filter((l: any) => l.category === "Surah");

  console.log(lessons);

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Surahs - Read and Understand the Chapters of the Holy Quran
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Explore all Surahs of the Holy Quran with meanings, translations, and
        insights. Understand the divine messages, themes, and significance of
        each chapter in Islam.
      </p>

      {lessons && lessons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson: any, index: number) => (
            <a
              key={index}
              href={`/quran/${lesson.slug.current}`}
              className="bg-white p-4 border rounded-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {lesson.title}
                </h2>
                <p className="text-gray-600 mt-2">{lesson.description}</p>
                <span className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors">
                  Start Reading...
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No Quran lessons available at the moment.
        </div>
      )}
    </div>
  );
};

export default Page;
