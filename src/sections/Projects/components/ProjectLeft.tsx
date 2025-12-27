import type { Projects } from "@/app/data/projects";
import TechStack from "@/sections/Projects/components/TechStack";
import GitHubLink from "@/sections/Projects/components/GitHubLink";

interface ProjectLeftProps {
  currentIndex: number;
  currentProject: Projects;
}

export default function ProjectLeft({ currentIndex, currentProject }: ProjectLeftProps) {
  return (
    <div className="flex flex-col md:w-[20vw] gap-2">
      <h3 className="
        hidden md:flex text-light-coral font-fira-code font-bold md:my-2 mb-1
        xl:text-base lg:text-sm md:text-xs text-[10px]
      ">
        Tech Stack
      </h3>
      <TechStack currentProject={currentProject} />
      <GitHubLink currentIndex={currentIndex} />
    </div>
  );
}
