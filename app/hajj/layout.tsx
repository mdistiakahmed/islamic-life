import SecondaryHeader from "@/components/navbar/SecondaryHeader";
import { fetchLessons } from "@/services/getLessons";
import { categoryMap } from "@/utils/constants";

export default async function HajjLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lessons = await fetchLessons("hajj");
  const navList = lessons
    ? lessons.map((element: any) => {
        return {
          name: element.title,
          path: element.slug.current,
        };
      })
    : [];

  return (
    <section>
      <SecondaryHeader subNavList={navList} />
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] py-[20px]">{children}</div>
      </div>
    </section>
  );
}
