"use client";

import Logo from "@/sections/Header/components/Logo";
import DesktopNav from "@/sections/Header/components/DesktopNav";
import MobileNav from "@/sections/Header/components/MobileNav";
import { useState } from "react";
import useScrollSpy from "@/app/hooks/useScrollSpy";

export interface navType {
  id: string;
  label: string;
  target: string;
}

const nav = [
  { id: "01.", label: "About", target: "AboutMe" },
  { id: "02.", label: "Skills", target: "Skill" },
  { id: "03.", label: "Projects", target: "Projects" },
  { id: "04.", label: "Experience", target: "Experience" },
  { id: "05.", label: "Contact", target: "Contact" },
];

export default function Header() {
  const [onClick, setOnClick] = useState(false);
  const activeSection = useScrollSpy();

  return (
    <header className="w-full flex flex-row justify-between items-center">
      <Logo />
      <div className="hidden md:block">
        <DesktopNav nav={nav} activeSection={activeSection} />
      </div>
      <div className="md:hidden">
        <MobileNav nav={nav} onClick={onClick} setOnClick={setOnClick} activeSection={activeSection} />
      </div>
    </header>
  );
}
