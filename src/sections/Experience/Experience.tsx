"use client";

import Title from "@/components/common/Title";
import ExperienceSummary from "@/sections/Experience/components/ExperienceSummary";
import { useState } from "react";
import ExperienceDetail from "@/sections/Experience/components/ExperienceDetail";

const title = {
  num: "04",
  name: "Experience",
};

export default function Experience() {
  const [modal, setModal] = useState(false);

  return (
    <main id="Experience" className="relative h-screen snap-start">
      <Title num={title.num} name={title.name} />

      <section
        className="
            flex flex-col w-full relative
            xl:top-42 xl:gap-6
            lg:top-40 lg:gap-6
            md:top-40 md:gap-6
            top-32 gap-4
          "
      >
        <button 
          onClick={() => setModal((prev) => !prev)}
          className="
            inline-flex self-end w-fit cursor-pointer  hover:text-light-coral
            xl:text-base lg:text-sm md:text-xs text-[10px]
        ">
          자세히 보기
        </button>
        <ExperienceSummary />
      </section>

      <div>
        {modal && (
          <div
            onClick={() => setModal(false)} 
            className="
              fixed inset-0 z-50 flex items-center justify-center 
            bg-black/60 backdrop-blur-sm
          ">
            <div
              onClick={(e) => e.stopPropagation()} 
              className="
                relative w-[90%] max-w-3xl max-h-[80vh] overflow-y-auto no-scrollbar
                rounded-lg bg-navy p-8
            ">
              <ExperienceDetail setModal={setModal} />
            </div>
        </div>
        )}
      </div>
    </main>
  );
}
