import Nav from "./components/Nav";
import Logo from "./components/Logo";

export interface navType {
  id: string;
  label: string;
}

const nav = [
  { id: "01.", label: "About" },
  { id: "02.", label: "Skills" },
  { id: "03.", label: "Projects" },
  { id: "04.", label: "Experience" },
  { id: "05.", label: "Contact" },
];

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center">
      <Logo />
      <Nav nav={nav} />
    </header>
  );
}
