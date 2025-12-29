import { EXPERIENCE } from "@/app/data/experience";
import Image from "next/image";
import { LuDot } from "react-icons/lu";

export default function ExperienceList() {
  return (
    <>
      {EXPERIENCE.map((value) => (
        <div
          key={value.id}
          className="
            flex flex-row gap-8 border border-white/10 bg-light-navy rounded-xl 
            group transition-transform duration-600 ease-in-out hover:border-light-coral hover:scale-[1.02]
            px-8 py-8 items-center
          ">
          <div className="hidden md:block">
            <Image
              src={value.image}
              alt={value.title}
              width={48}
              height={48}
              className="xl:w-18 lg:w-16 md:w-14 w-10 rounded-full"
            />
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex md:flex-row flex-col md:items-center md:gap-4 gap-2">
              <h2 className="xl:text-2xl lg:text-base text-sm group-hover:text-light-coral">
                {value.title}
              </h2>
              <span className="font-fira-code xl:text-sm lg:text-xs text-[10px] text-white/50">
                {value.period}
              </span>
            </div>

            <span className="xl:text-sm lg:text-xs text-[10px] text-light-coral font-bold">
              {value.explain}
            </span>
            {value.list.map((item) => (
              <ul key={item} className="flex flex-row gap-2 items-center">
                <LuDot className="text-light-coral" />
                <li className="xl:text-sm lg:text-xs text-[10px]">{item}</li>
              </ul>
            ))}
          </article>
        </div>
      ))}
    </>
  );
}
