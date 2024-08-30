import SecondaryHeader from "@/components/navbar/SecondaryHeader";
import { categoryMap } from "@/utils/constants";

export default function DuaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subNavList = categoryMap.dua;

  return (
    <section>
      <SecondaryHeader subNavList={subNavList} />
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] py-[20px]">{children}</div>
      </div>
    </section>
  );
}
