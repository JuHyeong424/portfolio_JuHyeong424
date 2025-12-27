import type { Projects } from "@/app/data/projects";
import TechStack from "@/sections/Projects/components/TechStack";
import GitHubLink from "@/sections/Projects/components/GitHubLink";

interface ProjectLeftProps {
  currentIndex: number;
  currentProject: Projects;
}

export default function ProjectLeft({ currentIndex, currentProject }: ProjectLeftProps) {
  return (
    <div className="flex flex-col w-[20vw] gap-2">
      <h3 className="text-base text-light-coral font-fira-code font-bold my-2">
        Tech Stack
      </h3>
      <TechStack currentProject={currentProject} />
      <GitHubLink currentIndex={currentIndex} />
    </div>
  );
}
