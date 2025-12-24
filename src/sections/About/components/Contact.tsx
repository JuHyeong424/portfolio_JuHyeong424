import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <aside className="flex flex-col font-fira-code gap-2">
      <span className="text-light-coral">Contact</span>
      <address className="flex flex-row items-center gap-2">
        <MdOutlineMailOutline className="text-light-coral" />
        <span>wkdwngud963@gmail.com</span>
      </address>
    </aside>
  );
}
