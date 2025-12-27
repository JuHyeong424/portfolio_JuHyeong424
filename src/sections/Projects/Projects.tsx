"use client";

import Title from "@/components/common/Title";
import { projects } from "@/app/data/projects";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from "react";

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
        <section
          className="
            border rounded-xl border-white/10 bg-navy
            flex flex-row px-8 py-10 gap-1 hover-project-glass
          "
        >
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl pb-3 font-bold">{currentProject.name}</h1>

            <div className="flex flex-row font-fira-code pb-2 text-sm text-white/60 gap-4">
              <div className="flex flex-row items-center">
                <CiCalendar className="mr-2" />
                <span>{currentProject.day}</span>
              </div>
              <span>|</span>
              <div className="flex flex-row items-center">
                <AiOutlineTeam className="mr-2" />
                <span>{currentProject.type}</span>
              </div>
            </div>

            <p className="text-base font-bold my-3">{currentProject.explain}</p>

            <p className="text-base text-light-coral font-fira-code font-bold my-2">
              Key Highlights
            </p>

            <ul>
              {currentProject.function.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center text-sm py-2"
                >
                  <span className="font-bold text-xl">
                    <IoChevronForward className="text-light-coral" />
                  </span>
                  <span className="px-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-[20vw] gap-2">
            <span className="text-sm text-light-coral font-fira-code font-bold my-1">
              Tech Stack
            </span>
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

            <a
              href={projects[currentIndex].url}
              target="_blank"
              aria-label="GitHub 저장소로 이동"
              className="
                flex w-full border mt-auto p-2 rounded-xl cursor-pointer
                items-center justify-center hover:border-light-coral hover:text-light-coral
              "
            >
              <FaGithub />
            </a>
          </div>
        </section>

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
      </section>
    </main>
  );
}
