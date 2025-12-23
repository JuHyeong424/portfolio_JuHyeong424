import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/JuHyeong424",
    icon: <FaGithub />,
    classes: "border-2 border-light-coral text-light-coral xl:py-5 xl:w-40 lg:w-35 lg:py-4 md:w-35 md:py-3 py-2 text-xs text-gradient-coral",
    hoverClasses: "hover-glass",
  },
  {
    label: "Blog",
    href: "https://j-brothers.tistory.com/",
    icon: <RiArticleLine />,
    classes: "border border-navy bg-light-coral text-navy xl:py-5 xl:w-40 lg:w-35 lg:py-4 md:w-35 md:py-3 py-2 text-xs",
    hoverClasses: "group hover-glass hover:bg-dark-coral",
  },
];

export default function Link() {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          className={`flex flex-row justify-center items-center gap-2 font-fira-code rounded-lg group transition-all duration-200 ${link.classes} ${link.hoverClasses}`}
        >
          {link.icon}
          <span>{link.label}</span>
          <MdOutlineArrowOutward className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      ))}
    </div>
  );
}
