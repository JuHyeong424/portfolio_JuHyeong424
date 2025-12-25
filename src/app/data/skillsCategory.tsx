import { FaCode } from "react-icons/fa";
import { MdArchitecture } from "react-icons/md";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlinePalette } from "react-icons/md";
import { ICON_URL } from "@/app/data/iconURL";

export const category = [
  {
    id: "foundation",
    name: "Foundation",
    icon: <FaCode />,
    count: "4 Technologies",
    color: "bg-gradient-to-br from-coral to-orange-500",
    explain: "Core technologies for building modern web applications",
    technology: [
      { id: "nextjs", name: "Next.js", icon: ICON_URL.nextjs },
      { id: "react", name: "React", icon: ICON_URL.react },
      { id: "typescript", name: "TypeScript", icon: ICON_URL.typescript },
      { id: "javascript", name: "JavaScript", icon: ICON_URL.javascript },
    ],
  },
  {
    id: "data-architecture",
    name: "Data Architecture",
    icon: <MdArchitecture />,
    count: "4 Technologies",
    color: "bg-gradient-to-br from-amber-500 to-yellow-500",
    explain: "State management and data flow solutions",
    technology: [
      { id: "tanstackQuery", name: "TanStack Query", icon: ICON_URL.tanstackQuery },
      { id: "zustand", name: "Zustand", icon: ICON_URL.zustand },
      { id: "tanstackRouter", name: "TanStack Router", icon: ICON_URL.tanstackRouter },
      { id: "reactHookForm", name: "React Hook Form", icon: ICON_URL.reactHookForm },
    ],
  },
  {
    id: "reliability-qa",
    name: "Reliability & QA",
    icon: <HiOutlineShieldCheck />,
    count: "5 Technologies",
    color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    explain: "Testing and quality assurance tools",
    technology: [
      { id: "playwright", name: "Playwright", icon: ICON_URL.playwright },
      { id: "msw", name: "MSW", icon: ICON_URL.msw },
      { id: "vitest", name: "Vitest", icon: ICON_URL.vitest },
      { id: "sentry", name: "Sentry", icon: ICON_URL.sentry },
      { id: "husky", name: "Husky", icon: ICON_URL.husky },
    ],
  },
  {
    id: "ux-design",
    name: "UX & Design",
    icon: <MdOutlinePalette />,
    count: "4 Technologies",
    color: "bg-gradient-to-br from-pink-500 to-purple-500",
    explain: "Beautiful and interactive user experiences",
    technology: [
      { id: "framerMotion", name: "Framer Motion", icon: ICON_URL.framerMotion },
      { id: "tailwindCSS", name: "Tailwind CSS", icon: ICON_URL.tailwindCSS },
      { id: "headlessUI", name: "Headless UI", icon: ICON_URL.headlessUI },
      { id: "figma", name: "Figma", icon: ICON_URL.figma },
    ],
  },
];
