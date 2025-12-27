import type { Projects } from "@/app/data/projects";

interface TechStackProps {
  currentProject: Projects;
}

export default function TechStack({ currentProject }: TechStackProps) {
  return (
    <div className="
      hidden md:flex flex-wrap md:gap-2 gap-1
      lg:text-xs md:text-[10px] text-[8px] font-fira-code
    ">
      {currentProject.tech.map((tech, index) => (
        <span
          key={index}
          className="
            border border-white/20 rounded-md hover:border-light-coral  hover:text-light-coral
            md:px-2 md:py-1 px-1 py-1
          ">
          {tech}
        </span>
      ))}
    </div>
  );
}
