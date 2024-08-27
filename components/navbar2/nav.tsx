"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";
import CategoryDropdown from "./CategoryDropdown";
import MobileCategoryDropdown from "./MobileCategoryDropdown";
import { navOptions } from "@/data/navOptions";

const NavComponent = () => {
  return (
    <Navbar isBordered className="bg-[#004b49]">
      <NavbarContent className="md:hidden" justify="start">
        <MobileCategoryDropdown />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href={`/`} className="text-white">
            <AcmeLogo />
            <p className="font-bold text-inherit">Islamic Life</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href={`/`} className="text-white">
            <AcmeLogo />
            <p className="font-bold text-inherit ">Islamic Life</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        {navOptions.map((o, index) => (
          <NavbarItem key={index}>
            <Link href={o.path} className="text-white font-medium">
              <p>{o.name}</p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default NavComponent;
