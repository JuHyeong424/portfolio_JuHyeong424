import Header from "@/sections/Header/Header";
import Introduction from "@/sections/Introduction/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 h-16 px-6 lg:px-24 py-6">
        <Header />
      </div>
      <main className="flex-1 flex flex-col justify-center px-10 lg:px-24">
        <Introduction />
      </main>
    </div>
  );
}
