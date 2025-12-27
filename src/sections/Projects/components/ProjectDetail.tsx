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
        flex md:flex-row flex-col gap-1 hover-project-glass
        lg:px-8 xl:py-10 lg:py-6 md:px-4 md:py-4 px-3 py-3
    ">
      <ProjectRight currentProject={currentProject} />
      <ProjectLeft currentIndex={currentIndex} currentProject={currentProject} />
    </section>
  );
}
