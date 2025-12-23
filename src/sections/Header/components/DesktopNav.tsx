import { navType } from "@/sections/Header/Header";

interface NavProps {
  nav: navType[];
}

export default function DesktopNav({ nav }: NavProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-row gap-6">
        {nav.map((value) => (
          <li
            key={value.id}
            className="cursor-pointer text-sm font-sans hover:text-light-coral hover:scale-110"
          >
            <span className="text-light-coral px-2">{value.id}</span>
            <span>{value.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
