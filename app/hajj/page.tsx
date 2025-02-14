import { fetchLessons } from "@/services/getLessons";

const HajjPage = async () => {
  const lessons = await fetchLessons('hajj');

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Hajj Learning Lessons
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Explore comprehensive Hajj lessons to deepen your understanding of this sacred pilgrimage and spiritual journey.
      </p>

      {lessons && lessons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson: any, index: number) => (
            <div
              key={index}
              className="bg-white p-4 border rounded-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {lesson.title}
                </h2>
                <p className="text-gray-600 mt-2">{lesson.description}</p>
                <a 
                  href={`/hajj/${lesson.slug.current}`} 
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Start Lesson
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No Hajj lessons available at the moment.
        </div>
      )}
    </div>
  );
};

export default HajjPage;
