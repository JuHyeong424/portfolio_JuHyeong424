import { navType } from "@/sections/Header/Header";

interface NavProps {
  nav: navType[];
  activeSection: string;
}

export default function DesktopNav({ nav, activeSection }: NavProps) {
  const handleClick = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-row gap-6">
        {nav.map((value) => (
          <li
            key={value.id}
            onClick={() => handleClick(value.target)}
            className={`
              cursor-pointer text-sm font-sans transition hover:text-light-coral hover:scale-110  
            `}
          >
            <span className="text-light-coral px-2">{value.id}</span>
            <span className={`
                ${activeSection === value.target
                  ? "text-light-coral"
                  : "text-white"
                }
              `}
            >
              {value.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
