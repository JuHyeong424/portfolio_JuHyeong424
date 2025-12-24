import { navType } from "@/sections/Header/Header";

interface NavProps {
  nav: navType[];
  onClick: boolean;
  setOnClick: (value: boolean) => void;
  activeSection: string;
}

export default function MobileNav({ nav, onClick, setOnClick, activeSection }: NavProps) {
  const handleClick = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>
      {!onClick && (
        <button 
          type="button" 
          className="md:hidden cursor-pointer transition-transform duration-300 hover:rotate-180 hover:scale-130" 
          onClick={() => setOnClick(true)}
        >
          ☰
        </button>
      )}
      {onClick && (
        <nav 
          aria-label="Main navigation"
          className="flex flex-col gap-6 fixed top-0 left-0 w-full z-50 bg-black p-4"
        >
          <button 
            type="button" 
            className="ml-auto cursor-pointer text-base hover:text-white" 
            onClick={() => setOnClick(false)}
          >
            X
          </button>
          <ul className="flex flex-col gap-8 py-2">
            {nav.map((value) => (
              <li
                key={value.id}
                onClick={() => handleClick(value.target)}
                className="cursor-pointer text-sm font-sans hover:text-light-coral"
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
      )}
    </>
  );
}
