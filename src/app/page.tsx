import Header from "@/sections/Header/Header";
import Introduction from "@/sections/Introduction/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Introduction />
    </div>
  );
}
