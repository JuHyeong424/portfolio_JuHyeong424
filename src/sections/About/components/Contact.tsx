import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <aside className="flex flex-col font-fira-code xl:gap-2 md:gap-2 gap-1">
      <span className="text-light-coral xl:text-xl md:text-sm text-xs">Contact</span>
      <address className="flex flex-row items-center md:gap-2 gap-1">
        <MdOutlineMailOutline className="text-light-coral xl:text-base lg:text-sm md:text-xs text-[10px]" />
        <span className="xl:text-base lg:text-sm md:text-xs text-[10px]">wkdwngud963@gmail.com</span>
      </address>
    </aside>
  );
}
