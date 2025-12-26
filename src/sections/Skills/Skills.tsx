"use client"

import Title from "@/components/common/Title";
import Category from "@/sections/Skills/components/Category";
import Lists from "@/sections/Skills/components/Lists";
import { useState } from "react";
import { category } from "@/app/data/skillsCategory";

const title = {
  num: '02',
  name: 'Skills'
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(category[0].id);
  
  return (
    <main 
      id="Skills" 
      className="relative h-screen snap-start"
    >
      <Title num={title.num} name={title.name} />
      <section className="
        absolute flex w-full
        xl:top-44 xl:gap-8
        lg:top-40 lg:gap-6
        md:top-40 md:gap-6 md:flex-row
        top-32 gap-4 flex-col
      ">
        <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Lists selectedCategory={selectedCategory} />
      </section>
    </main>
  )
}