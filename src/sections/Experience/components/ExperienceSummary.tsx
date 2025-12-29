import { EXPERIENCE } from "@/app/data/experience";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2">
      {EXPERIENCE.map((value) => (
        <div
          key={value.id}
          className="
            flex flex-row border border-white/10 bg-light-navy items-center
            transition-transform duration-600 ease-in-out hover:border-light-coral hover:scale-[1.02]
            rounded xl:p-6 lg:p-4 p-2 gap-4 
        ">
          <div>
            <Image
              src={value.image}
              alt={value.title}
              width={20}
              height={20}
              className="xl:w-18 lg:w-16 md:w-14 w-10 rounded-full"
            />
          </div>
          <div className="flex flex-col lg:gap-2 gap-1">
            <h2 className="xl:text-2xl lg:text-base text-sm">{value.title}</h2>
            <span className="text-white/50 xl:text-sm lg:text-xs text-[10px] font-fira-code">
              {value.period}
            </span>
            <span className="text-light-coral xl:text-sm lg:text-xs text-[10px] font-bold">
              {value.explain}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
