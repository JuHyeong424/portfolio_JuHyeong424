import type { Projects } from "@/app/data/projects";
import ProjectRight from "@/sections/Projects/components/ProjectRight";
import ProjectLeft from "@/sections/Projects/components/ProjectLeft";

interface ProjectDetailProps {
  currentIndex: number;
  currentProject: Projects;
}

export default function ProjectDetail({ currentIndex, currentProject }: ProjectDetailProps) {
  return (
    <section
      className="
        border rounded-xl border-white/10 bg-navy
        flex flex-row px-8 py-10 gap-1 hover-project-glass
    ">
      <ProjectRight currentProject={currentProject} />
      <ProjectLeft currentIndex={currentIndex} currentProject={currentProject} />
    </section>
  );
}
