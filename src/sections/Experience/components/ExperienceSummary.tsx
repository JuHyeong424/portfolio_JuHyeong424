import { EXPERIENCE } from "@/app/data/experience";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {EXPERIENCE.map((value) => (
        <div
          key={value.id}
          className="
            flex flex-row gap-4 border border-white/10 bg-light-navy 
            transition-transform duration-600 ease-in-out hover:border-light-coral hover:scale-[1.02]
            rounded p-6 items-center
        ">
          <div>
            <Image
              src={value.image}
              alt={value.title}
              width={20}
              height={20}
              className="w-18 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl">{value.title}</h2>
            <span className="text-white/50 text-sm font-fira-code">
              {value.period}
            </span>
            <span className="text-light-coral text-sm font-bold">
              {value.explain}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
