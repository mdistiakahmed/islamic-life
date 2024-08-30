import SecondaryHeader from "@/components/navbar/SecondaryHeader";
import { categoryMap } from "@/utils/constants";

export default function ZakatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subNavList = categoryMap.zakat;

  return (
    <section>
      <SecondaryHeader subNavList={subNavList} />
      <div className="flex items-center justify-center w-full">
        <div className=" w-[95vw] md:w-[70vw] py-[20px]">{children}</div>
      </div>
    </section>
  );
}
