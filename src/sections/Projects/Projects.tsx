"use client";

import Title from "@/components/common/Title";
import { projects } from "@/app/data/projects";
import { useState } from "react";
import ProjectDetail from "@/sections/Projects/components/ProjectDetail";
import PagingButton from "@/sections/Projects/components/PagingButton";

const title = {
  num: "03",
  name: "Projects",
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  return (
    <main id="Projects" className="relative h-screen snap-start">
      <Title num={title.num} name={title.name} />

      <section
        className="
        flex w-full relative
        xl:top-42 xl:gap-8
        lg:top-40 lg:gap-6
        md:top-40 md:gap-6
        top-32 gap-4 flex-col
    "
      >
        <ProjectDetail currentIndex={currentIndex} currentProject={currentProject} />
        <PagingButton total={projects.length} setCurrentIndex={setCurrentIndex} />
      </section>
    </main>
  );
}
