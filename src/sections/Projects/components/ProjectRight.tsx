import KeyHighlights from "@/sections/Projects/components/KeyHighlights";
import PeriodAndType from "@/sections/Projects/components/PeriodAndType";
import type { Projects } from "@/app/data/projects";

interface ProjectRightProps {
  currentProject: Projects;
}

export default function ProjectRight({ currentProject }: ProjectRightProps) {
  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-3xl pb-3 font-bold">{currentProject.name}</h1>
      <PeriodAndType currentProject={currentProject} />
      <p className="text-base font-bold my-3">{currentProject.explain}</p>
      <h3 className="text-base text-light-coral font-fira-code font-bold my-2">
        Key Highlights
      </h3>
      <KeyHighlights currentProject={currentProject} />
    </div>
  );
}
