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
            flex flex-row items-center md:gap-6 gap-4 bg-light-navy
            border border-white/10 md:p-8 p-4 xl:w-[50%] lg:w-[60%] md:w-[70%] w-full
            font-fira-code rounded-lg group transition-all duration-300
            hover:border-light-coral hover:-translate-y-1
            hover:shadow-lg hover:shadow-light-coral/30
          ">
          <span className="md:text-3xl text-base group-hover:text-light-coral">
            {link.icon}
          </span>
          <div className="flex flex-col">
            <span className="text-white/60 md:text-sm text-[10px]">{link.label}</span>
            <span className="group-hover:text-light-coral md:text-base text-xs">{link.explain}</span>
          </div>
          <MdOutlineArrowOutward
            className="
              transition-transform duration-200 group-hover:translate-x-1 
              group-hover:-translate-y-1 group-hover:text-light-coral
              ml-auto md:w-6 md:h-6 w-2 h-2
            "/>
        </a>
      ))}
    </div>
  );
}
