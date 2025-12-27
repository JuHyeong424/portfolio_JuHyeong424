import { IoChevronForward } from "react-icons/io5";
import type { Projects } from "@/app/data/projects";

interface KeyHighlightsProps {
  currentProject: Projects;
}

export default function KeyHighlights({ currentProject }: KeyHighlightsProps) {
  return (
    <ul>
      {currentProject.function.map((item, index) => (
        <li key={index} className="
          flex flex-row items-center 
          xl:text-sm lg:text-xs md:text-[14px] text-[10px] 
          lg:py-2 md:py-1 
        ">
          <span className="font-bold md:text-xl text-xs">
            <IoChevronForward className="text-light-coral" />
          </span>
          <span className="px-2">{item}</span>
        </li>
      ))}
    </ul>
  );
}
