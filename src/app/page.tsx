import Header from "@/sections/Header/Header";
import Introduction from "@/sections/Introduction/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col justify-center px-24">
        <Introduction />
      </main>
    </div>
  );
}
