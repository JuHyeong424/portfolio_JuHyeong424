import { FaGithub } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

export const links = [
  {
    label: "GitHub",
    href: "https://github.com/JuHyeong424",
    icon: <FaGithub />,
    classes: "border-2 border-light-coral text-light-coral xl:py-5 xl:w-40 lg:w-35 lg:py-4 md:w-35 md:py-3 py-2 text-xs text-gradient-coral",
    hoverClasses: "hover-glass",
    explain: "JuHyeong424",
  },
  {
    label: "Blog",
    href: "https://j-brothers.tistory.com/",
    icon: <RiArticleLine />,
    classes: "border border-navy bg-light-coral text-navy xl:py-5 xl:w-40 lg:w-35 lg:py-4 md:w-35 md:py-3 py-2 text-xs",
    hoverClasses: "group hover-glass hover:bg-dark-coral",
    explain: "j-brothers.tistory.com",
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=wkdwngud963@gmail.com",
    icon: <MdOutlineEmail />,
    classes: "border-2 border-light-coral text-light-coral xl:py-5 xl:w-40 lg:w-35 lg:py-4 md:w-35 md:py-3 py-2 text-xs text-gradient-coral",
    hoverClasses: "hover-glass",
    explain: "wkdwngud963@gmail.com",
  }
];
