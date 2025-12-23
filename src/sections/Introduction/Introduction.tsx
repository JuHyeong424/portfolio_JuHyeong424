import Dot from "@/sections/Introduction/components/Dot";
import Scroll from "@/sections/Introduction/components/Scroll";
import Comment from "@/sections/Introduction/components/Comment";
import Link from "@/sections/Introduction/components/Link";

export default function Introduction() {
  return (
    <section aria-label="Introduction" className="flex flex-col gap-4">
      <Dot />

      <div className="relative z-20">
        <Comment />
        <Link />
      </div>

      <Scroll />
    </section>
  );
}
