"use client";

import Logo from "@/sections/Header/components/Logo";
import DesktopNav from "@/sections/Header/components/DesktopNav";
import MobileNav from "@/sections/Header/components/MobileNav";
import { useState } from "react";

export interface navType {
  id: string;
  label: string;
}

const nav = [
  { id: "01.", label: "About" },
  { id: "02.", label: "Skills" },
  { id: "03.", label: "Projects" },
  { id: "04.", label: "Experience" },
  { id: "05.", label: "Contact" },
];

export default function Header() {
  const [onClick, setOnClick] = useState(false);

  return (
    <header className="w-full flex flex-row justify-between items-center">
      <Logo />
      <div className="hidden md:block">
        <DesktopNav nav={nav} />
      </div>
      <div className="md:hidden">
        <MobileNav nav={nav} onClick={onClick} setOnClick={setOnClick} />
      </div>
    </header>
  );
}
