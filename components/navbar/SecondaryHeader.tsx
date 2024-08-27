"use client";

import { Dancing_Script } from "next/font/google";
import Breadcrumb from "../breadcrumbs/Breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});

const SecondaryHeader = ({ subNavList }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState<any>("quotes");
  const [selectedSubNav, setSelectedSubNav] = useState<any>(null);

  useEffect(() => {
    const parts = pathname.split("/");
    const categoryPart = parts[1];
    setCurrentCategory(categoryPart);

    if (parts.length > 2) {
      setSelectedSubNav(parts[2]);
    } else {
      setSelectedSubNav(null);
    }
  }, [pathname]);

  const navigateToSubNavCategory = (name: string) => {
    let targetUrl = "";
    if (currentCategory === "quotes" || currentCategory === "") {
      targetUrl = `/quotes/${name.toLowerCase()}`;
    } else {
      targetUrl = `/${currentCategory}/${name.toLowerCase()}`;
    }
    router.push(targetUrl);
  };

  return (
    <header className={`${dancingScript.className} sticky top-0 z-50 bg-white`}>
      <nav className="p-2 sticky top-0">
        {subNavList && (
          <ul className=" flex gap-4 overflow-auto no-scrollbar">
            {subNavList.map((s: any, index: any) => (
              <li
                className={`px-2 whitespace-nowrap rounded-xl bg-[#ffe7e7] text-[#ff1414] text-[24px]  cursor-pointer border-[1px] hover:border-[#ff1414] ${
                  s.path === selectedSubNav ? "border-[#ff1414]" : ""
                }`}
                key={index}
                onClick={() => navigateToSubNavCategory(s.path)}
              >
                {s.name}
              </li>
            ))}
          </ul>
        )}
      </nav>
      <Breadcrumb />
    </header>
  );
};

export default SecondaryHeader;
