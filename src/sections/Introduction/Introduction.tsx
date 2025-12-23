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
      <div className="relative z-20">
        <p className="text-light-coral font-fira-code mb-6">안녕하세요, 저는</p>
        <p className="text-white/95 font-bold text-8xl">장주형입니다</p>
        <p className="text-5xl font-bold my-4">
          사용자 경험을 설계하는 프론트엔드 개발자
        </p>
        <p className="mt-2 my-6">
          사용자의 흐름을 먼저 고민하며,
          <span className="font-bold"> React</span>와
          <span className="font-bold"> TypeScript</span>로 이해하기 쉬운 UI를
          만듭니다.
        </p>
        <div className="flex gap-4">
          <a
            href={URL.github}
            target={URL.blank}
            className="
            flex flex-row justify-center items-center gap-2
            border-2 rounded-lg border-light-coral px-auto py-5
            w-40 font-fira-code text-sm text-light-coral
            group hover-glass
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
            border border-navy rounded-lg bg-light-coral px-auto py-5
            w-40 font-fira-code text-sm text-navy
            group hover-glass hover:bg-dark-coral
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
      <div className="pointer-events-none fixed inset-0 z-10">
        <span className="absolute top-[20vh] left-[10vw] w-2.5 h-2.5 rounded-full animate-very-slow-blink" />
        <span className="absolute top-[30vh] right-[12vw] w-2.5 h-2.5 rounded-full animate-slow-blink" />
        <span className="absolute top-[75vh] right-[20vw] w-2.5 h-2.5 rounded-full animate-fast-blink" />
        <span className="absolute top-[78vh] left-[20vw] w-2.5 h-2.5 rounded-full animate-normal-blink" />
      </div>

      <div className="fixed bottom-[15vh] left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
        <span className="text-[10px] mb-2 font-fira-code">Scroll Down</span>
        <div className="relative w-5 h-10 border-2 rounded-2xl">
          <span className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-3.5 bg-light-coral rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}
