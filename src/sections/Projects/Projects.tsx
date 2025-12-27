"use client";

import Title from "@/components/common/Title";
import { projects } from "@/app/data/projects";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from "react";
import ProjectDetail from "@/sections/Projects/components/ProjectDetail";

const title = {
  num: "03",
  name: "Projects",
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev: number) => {
      return prev === 0 ? projects.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      return prev === projects.length - 1 ? 0 : prev + 1;
    });
  };

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
        
        <aside>
          <button
            aria-label="previous button"
            onClick={handlePrev}
            className="
              absolute -left-24 top-1/2 -translate-y-1/2 cursor-pointer
              flex items-center justify-center border rounded-full w-12 h-12
              hover:border-light-coral hover:text-light-coral
            ">
            <GrFormPrevious />
          </button>
          <button
            aria-label="next button"
            onClick={handleNext}
            className="
              absolute -right-24 top-1/2 -translate-y-1/2 cursor-pointer
              flex items-center justify-center border rounded-full w-12 h-12
              hover:border-light-coral hover:text-light-coral
            ">
            <GrFormNext />
          </button>
        </aside>
      </section>
    </main>
  );
}
