import KeyHighlights from "@/sections/Projects/components/KeyHighlights";
import PeriodAndType from "@/sections/Projects/components/PeriodAndType";
import type { Projects } from "@/app/data/projects";

interface ProjectRightProps {
  currentProject: Projects;
}

export default function ProjectRight({ currentProject }: ProjectRightProps) {
  return (
    <div className="flex flex-col flex-1 md:my-0 mb-4">
      <h1 className="
        xl:text-3xl lg:text-2xl md:text-xl text-sm
        lg:pb-3 md:pb-2 pb-1 font-bold
      ">
        {currentProject.name}
      </h1>
      <PeriodAndType currentProject={currentProject} />
      <p className="
        xl:text-base lg:text-sm md:text-xs text-[10px]
        font-bold lg:my-3 md:my-2
      ">
        {currentProject.explain}
      </p>
      <h3 className="
        xl:text-base lg:text-sm md:text-xs text-[10px]
        text-light-coral font-fira-code font-bold lg:my-2 md:my-1 my-1
      ">
        Key Highlights
      </h3>
      <KeyHighlights currentProject={currentProject} />
    </div>
  );
}
