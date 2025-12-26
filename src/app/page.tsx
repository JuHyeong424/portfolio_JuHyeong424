import Header from "@/sections/Header/Header";
import Introduction from "@/sections/Introduction/Introduction";
import About from "@/sections/About/About";
import Skills from "@/sections/Skills/Skills";
import Projects from "@/sections/Projects/Projects";

const sections = [
  { id: "about", component: <About /> },
  { id: "skills", component: <Skills /> },
  { id: "projects", component: <Projects />}
]

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 h-16 px-6 lg:px-24 py-12">
        <Header />
      </div>
      <main className="flex-1 w-full h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory scroll-smooth">
        <Introduction />

        {sections.map((value) => (
          <section
            key={value.id} 
            id={value.id}
            className="bg-navy w-full h-screen flex flex-col justify-center px-10 lg:px-40"
          >
            {value.component}
          </section>
        ))}
      </main>
    </div>
  );
}
