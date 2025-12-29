import { links } from "@/app/data/myInformation";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function ContactLink() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          className="
            flex flex-row items-center gap-6 bg-light-navy
            border border-white/10 p-8 w-[50%]
            font-fira-code rounded-lg group transition-all duration-300
            hover:border-light-coral hover:-translate-y-1
            hover:shadow-lg hover:shadow-light-coral/30
          ">
          <span className="text-3xl group-hover:text-light-coral">
            {link.icon}
          </span>
          <div className="flex flex-col">
            <span className="text-white/60 text-sm">{link.label}</span>
            <span className="group-hover:text-light-coral">{link.explain}</span>
          </div>
          <MdOutlineArrowOutward
            className="
              transition-transform duration-200 group-hover:translate-x-1 
              group-hover:-translate-y-1 group-hover:text-light-coral
              ml-auto w-6 h-6
            "/>
        </a>
      ))}
    </div>
  );
}
