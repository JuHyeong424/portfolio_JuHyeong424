"use client";

import Title from "@/components/common/Title";
import { projects } from "@/app/data/projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetail from "@/sections/Projects/components/ProjectDetail";
import PagingButton from "@/sections/Projects/components/PagingButton";
import { sliderVariants } from "@/sections/Projects/animation";

const title = {
  num: "03",
  name: "Projects",
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const currentProject = projects[currentIndex];

  return (
    <main id="Projects" className="relative h-screen snap-start">
      <Title num={title.num} name={title.name} />
      <section className="
        flex w-full relative
        xl:top-42 xl:gap-8
        lg:top-40 lg:gap-6
        md:top-40 md:gap-6
        top-32 gap-4 flex-col
      ">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            <ProjectDetail 
              currentIndex={currentIndex} 
              currentProject={currentProject} 
            />
          </motion.div>
        </AnimatePresence>
      </section>
        <PagingButton 
          setDirection={setDirection} 
          total={projects.length} 
          setCurrentIndex={setCurrentIndex} 
        />
    </main>
  );
}
