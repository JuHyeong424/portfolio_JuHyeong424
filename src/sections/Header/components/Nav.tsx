import { navType } from "../Header";

interface NavProps {
  nav: navType[];
}

export default function Nav({ nav }: NavProps) {
  return (
    <div className="flex flex-row gap-6">
      {nav.map((value) => (
        <nav 
            key = {value.id}
            className="cursor-pointer text-sm font-sans hover:text-light-coral"
        >
          <span className="text-light-coral px-2">{value.id}</span>
          <span>{value.label}</span>
        </nav>
      ))}
    </div>
  );
}
