import Header from "@/sections/Header/Header";
import Introduction from "@/sections/Introduction/Introduction";
import About from "@/sections/About/About";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 h-16 px-6 lg:px-24 py-12">
        <Header />
      </div>
      <main className="flex-1 w-screen h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory scroll-smooth">
        <Introduction />

        <section className="snap-start h-screen w-full flex flex-col justify-center px-10 lg:px-40">
          <About />
        </section>
      </main>
    </div>
  );
}
