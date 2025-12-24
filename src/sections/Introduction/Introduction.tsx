import Dot from "@/sections/Introduction/components/Dot";
import Scroll from "@/sections/Introduction/components/Scroll";
import Comment from "@/sections/Introduction/components/Comment";
import Link from "@/sections/Introduction/components/Link";

export default function Introduction() {
  return (
    <section aria-label="Introduction" className="snap-start relative h-screen w-full flex flex-col gap-4">
      <div className="absolute inset-0 z-0">
        <Dot />
      </div>
      

      <div className="relative w-full h-full flex flex-col justify-center z-20 px-10 lg:px-40">
        <Comment />
        <Link />
      </div>

      <div className="
        absolute bottom-[5vh] xl:bottom-[15vh] md:bottom-[10vh]
        left-1/2 -translate-x-1/2 z-10
      ">
        <Scroll />
      </div>
    </section>
  );
}
