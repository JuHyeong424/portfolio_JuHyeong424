import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";

const URL = {
  github: "https://github.com/JuHyeong424",
  blog: "https://j-brothers.tistory.com/",
  blank: "_blank",
};

export default function Introduction() {
  return (
    <section aria-label="Introduction" className="flex flex-col gap-4">
      <div className="absolute top-[10vh] inset-0 z-10 pointer-events-none">
        <span className="absolute top-[14vh] left-[8vw] w-2.5 h-2.5 rounded-full animate-very-slow-blink" />
        <span className="absolute top-[24vh] right-[12vw] w-2.5 h-2.5 rounded-full animate-slow-blink" />
        <span className="absolute top-[55vh] right-[18vw] w-2.5 h-2.5 rounded-full animate-fast-blink" />
        <span className="absolute top-[63vh] left-[20vw] w-2.5 h-2.5 rounded-full animate-normal-blink" />
    </div>

      <div className="relative z-20">
        <p className="text-light-coral font-fira-code lg:mb-6 mb-2">안녕하세요, 저는</p>
        <p className="text-white/95 font-bold xl:text-8xl lg:text-7xl md:text-6xl text-xl">장주형입니다</p>
        <p className="xl:text-5xl lg:text-4xl md:text-2xl text-xs font-bold my-4">
          사용자 경험을 설계하는 프론트엔드 개발자
        </p>
        <p className="mt-2 my-6 md:text-xs text-[10px]">
          사용자의 흐름을 먼저 고민하며,
          <span className="font-bold"> React</span>와
          <span className="font-bold"> TypeScript</span>로 이해하기 쉬운 UI를
          만듭니다.
        </p>
        <div className="flex md:flex-row flex-col gap-4">
          <a
            href={URL.github}
            target={URL.blank}
            className="
            flex flex-row justify-center items-center gap-2
            border-2 rounded-lg border-light-coral px-auto xl:py-5
            xl:w-40 font-fira-code lg:text-sm text-light-coral
            group hover-glass
            lg:w-35 lg:py-4 md:w-35 md:py-3
            py-2 text-xs
          "
          >
            <FaGithub />
            <span className="text-gradient-coral">GitHub</span>
            <MdOutlineArrowOutward
              className="
              transition-transform duration-200 
              group-hover:translate-x-1 
              group-hover:-translate-y-1
            "
            />
          </a>
          <a
            href={URL.blog}
            target={URL.blank}
            className="
            flex flex-row justify-center items-center gap-2
            border border-navy rounded-lg bg-light-coral px-auto xl:py-5
            xl:w-40 font-fira-code lg:text-sm text-navy
            group hover-glass hover:bg-dark-coral
            lg:w-35 lg:py-4 md:w-35 md:py-3
            py-2 text-xs
          "
          >
            <RiArticleLine />
            Blog
            <MdOutlineArrowOutward
              className="
              transition-transform duration-200 
              group-hover:translate-x-1 
              group-hover:-translate-y-1
            "
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-[5vh] xl:bottom-[15vh] md:bottom-[10vh] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
        <span className="text-[6px] xl:text-[10px] md:text-[9px] mb-2 font-fira-code">Scroll Down</span>
        <div className="relative w-2 h-6 md:w-5 md:h-10 border-2 rounded-2xl">
          <span className="absolute top-2 left-1/2 -translate-x-1/2 w-0.5 md:w-1 h-2 md:h-3.5 bg-light-coral rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}
