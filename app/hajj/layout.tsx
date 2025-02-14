import Sidebar from "@/components/sidebar/Sidebar";
import { fetchLessons } from "@/services/getLessons";

export default async function QuranLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col md:flex-row">
    <Sidebar courseName="hajj" />
    <div className="w-full md:w-3/4">{children}</div>
  </div>
  );
}
