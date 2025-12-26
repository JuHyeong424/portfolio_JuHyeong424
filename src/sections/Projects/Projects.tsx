import Title from "@/components/common/Title";
import { projects } from "@/app/data/projects";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const title = {
  num: "03",
  name: "Projects",
};

export default function Projects() {
  return (
    <main id="Projects" className="relative h-screen snap-start">
      <Title num={title.num} name={title.name} />

      <section
        className="
        absolute flex w-full
        xl:top-40 xl:gap-4
        lg:top-40 lg:gap-6
        md:top-40 md:gap-6
        top-32 gap-4 flex-col
    "
      >
        {projects.map((value) => (
          <section
            key={value.id}
            className="
            border rounded-xl border-white/10 bg-navy
            flex flex-row px-6 py-8 gap-1 hover-project-glass
          "
          >
            <div className="flex flex-col flex-1">
              <div className="flex flex-row gap-4 items-center">
                <h1 className="text-2xl pb-1 font-bold">{value.name}</h1>

                <div className="flex flex-row font-fira-code pb-1 text-sm text-white/60 gap-4">
                  <div className="flex flex-row items-center">
                    <CiCalendar className="mr-2" />
                    <span>{value.day}</span>
                  </div>
                  <span>|</span>
                  <div className="flex flex-row items-center">
                    <AiOutlineTeam className="mr-2" />
                    <span>{value.type}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-bold my-2">{value.explain}</p>

              <p className="text-sm text-light-coral font-fira-code font-bold my-1">
                Key Highlights
              </p>

              <ul>
                {value.function.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center text-xs py-1"
                  >
                    <IoChevronForward className="text-light-coral" />
                    <span className="px-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col w-[20vw] gap-2">
              <span className="text-sm text-light-coral font-fira-code font-bold my-1">Tech Stack</span>
              <div className="flex flex-wrap gap-2 text-xs font-fira-code">
                {value.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="border border-white/20 rounded-md px-2 py-1 hover:border-light-coral  hover:text-light-coral"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                key={value.id}
                href={value.url}
                target="_blank"
                aria-label="GitHub 저장소로 이동"
                className="
                flex w-full border mt-auto p-2 rounded-xl cursor-pointer
                items-center justify-center hover:border-light-coral hover:text-light-coral
              ">
                <FaGithub />
              </a>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
