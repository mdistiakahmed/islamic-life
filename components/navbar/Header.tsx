"use client";

import React, { useEffect, useRef, useState } from "react";
import { AcmeLogo } from "./AcmeLogo";
import { usePathname } from "next/navigation";
import { navOptions } from "@/utils/constants";
import Link from "next/link";
import { IoAppsSharp } from "react-icons/io5";
import { FaCompressArrowsAlt } from "react-icons/fa";

const HeaderComponent = () => {
  const [isMoreButtonClicked, setIsMoreButtonClicked] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<any>(null);

  const checkIfActivepath = (name: any) => {
    return pathname.includes(name);
  };

  // close expaneded more button, by clicking outside
  const handleClickOutside = (event: any) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target) &&
      isMoreButtonClicked
    ) {
      setIsMoreButtonClicked(false);
    }
  };

  useEffect(() => {
    if (isMoreButtonClicked) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMoreButtonClicked]);

  const toggleMoreButton = () => {
    setIsMoreButtonClicked(!isMoreButtonClicked);
  };

  return (
    <header
      className="bg-[#004b49] px-5 py-2  sm:px-[10vw] grid grid-cols-2"
      ref={headerRef}
    >
      <Link href={`/`} className="text-white  flex items-center">
        <AcmeLogo />
        <p className="font-bold  whitespace-nowrap">Islamic Life</p>
      </Link>

      <div className="hidden sm:flex gap-5 justify-end items-center">
        {navOptions.map((o: any, index: any) => (
          <Link
            href={`${o.path}`}
            className={`text-white  p-2 rounded-lg ${
              checkIfActivepath(o.path) ? "bg-[#052120]" : ""
            }`}
            key={index}
          >
            <p>{o.name}</p>
          </Link>
        ))}
      </div>

      <div className="sm:hidden flex items-center justify-end">
        <button
          className="flex gap-1 items-center text-white font-semibold bg-[#052120] p-2 rounded-lg w-[80px]"
          onClick={toggleMoreButton}
        >
          {isMoreButtonClicked ? "Less" : "More"}
          {isMoreButtonClicked ? <FaCompressArrowsAlt /> : <IoAppsSharp />}
        </button>
      </div>
      {isMoreButtonClicked && (
        <ul className="col-span-2 grid grid-cols-2 gap-4 my-6">
          {navOptions.map((o: any, index: any) => (
            <li className="flex items-center justify-center" key={index}>
              <Link
                href={`${o.path}`}
                className="text-white"
                onClick={() => setIsMoreButtonClicked(false)}
              >
                <p className="font-bold text-center p-2 bg-[#052120] rounded-lg w-[90px] ">
                  {o.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default HeaderComponent;
