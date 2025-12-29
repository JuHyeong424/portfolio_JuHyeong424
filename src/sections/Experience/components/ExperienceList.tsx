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
            px-8 py-8
          ">
          <div className="">
            <Image
              src={value.image}
              alt={value.title}
              width={48}
              height={48}
              className="w-20 rounded-full"
            />
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-4">
              <h2 className="text-xl group-hover:text-light-coral">
                {value.title}
              </h2>
              <span className="font-fira-code text-sm text-white/50">
                {value.period}
              </span>
            </div>

            <span className="text-sm text-light-coral font-bold">
              {value.explain}
            </span>
            {value.list.map((item) => (
              <ul key={item} className="flex flex-row gap-2 items-center">
                <LuDot className="text-light-coral" />
                <li className="text-sm">{item}</li>
              </ul>
            ))}
          </article>
        </div>
      ))}
    </>
  );
}
