import Link from "next/link";

export default function Logo() {
  return (
    <nav className="home navigation">
      <Link href="#Introduction">
        <h1 className="group cursor-pointer sm:text-lg md:text-xl font-fira-code">
          <span className="text-light-coral">{"<"}</span>
          <span className="text-white mx-3 group-hover:text-light-coral">JH</span>
          <span className="text-light-coral">{"/>"}</span>
        </h1>
      </Link>
    </nav>
  );
}
