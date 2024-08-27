import SecondaryHeader from "@/components/navbar2/SecondaryHeader";
import { categoryMap } from "@/utils/constants";

export default function SawmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subNavList = categoryMap.sawm;

  return (
    <section>
      <SecondaryHeader subNavList={subNavList} />
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] py-[20px]">{children}</div>
      </div>
    </section>
  );
}
