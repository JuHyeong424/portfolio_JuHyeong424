import type { Projects } from "@/app/data/projects";

interface TechStackProps {
  currentProject: Projects;
}

export default function TechStack({ currentProject }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-2 text-xs font-fira-code">
      {currentProject.tech.map((tech, index) => (
        <span
          key={index}
          className="border border-white/20 rounded-md px-2 py-1 hover:border-light-coral  hover:text-light-coral"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
