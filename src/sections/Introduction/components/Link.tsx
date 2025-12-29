import { MdOutlineArrowOutward } from "react-icons/md";
import { links } from "@/app/data/myInformation";

export default function Link() {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      {links.slice(0, -1).map((link) => (
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
