import Title from "@/components/common/Title";
import Article from "@/sections/About/components/Article";
import Box from "@/sections/About/components/Box";
import Contact from "@/sections/About/components/Contact";
import MyImage from "@/sections/About/components/MyImage";

const title = {
  num: '01',
  name: 'About Me'
}

export default function About() {
  return (
    <main className="relative h-screen snap-start">
      <Title num={title.num} name={title.name} />

      <section className="absolute top-42 flex flex-row gap-10 w-full">
        <article className="flex flex-col gap-4 w-[50vw]">
          <Article />
          <Box />
          <Contact />
        </article>

        <MyImage />
      </section>
    </main>
  )
}
