import { IoChevronForward } from "react-icons/io5";
import type { Projects } from "@/app/data/projects";

interface KeyHighlightsProps {
  currentProject: Projects;
}

export default function KeyHighlights({ currentProject }: KeyHighlightsProps) {
  return (
    <ul>
      {currentProject.function.map((item, index) => (
        <li key={index} className="flex flex-row items-center text-sm py-2">
          <span className="font-bold text-xl">
            <IoChevronForward className="text-light-coral" />
          </span>
          <span className="px-2">{item}</span>
        </li>
      ))}
    </ul>
  );
}
