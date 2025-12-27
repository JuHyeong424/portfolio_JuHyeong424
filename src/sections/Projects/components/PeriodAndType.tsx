import { CiCalendar } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import type { Projects } from "@/app/data/projects";

interface PeriodAndTypeProps {
  currentProject: Projects;
}

export default function PeriodAndType({ currentProject }: PeriodAndTypeProps) {
  return (
    <div className="
      flex flex-row font-fira-code text-white/60 gap-4
      xl:text-sm lg:text-xs md:text-[12px] text-[8px]
      lg:pb-2 md:pb-1 pb-1
    ">
      <div className="flex flex-row items-center">
        <CiCalendar className="mr-2" />
        <span>{currentProject.day}</span>
      </div>
      <span>|</span>
      <div className="flex flex-row items-center">
        <AiOutlineTeam className="mr-2" />
        <span>{currentProject.type}</span>
      </div>
    </div>
  );
}
