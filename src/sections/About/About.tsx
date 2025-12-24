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
    <main 
      id="AboutMe" 
      className="relative h-screen snap-start"
    >
      <Title num={title.num} name={title.name} />

      <section className="
        absolute flex w-full
        xl:top-44 xl:gap-8
        lg:top-40 lg:gap-8
        md:top-40 md:gap-8 md:flex-row
        top-32 gap-2 flex-col
      ">
        <article className="
          flex flex-col 
          xl:gap-4 xl:w-[50vw]
          lg:gap-4 lg:w-[48vw]
          md:gap-4 md:w-[46vw] md:order-1
          gap-4 w-full order-2
        ">
          <Article />
          <Box />
          <Contact />
        </article>
        <div className="order-1 flex-1 md:order-2">
          <MyImage />
        </div>
      </section>
    </main>
  )
}
