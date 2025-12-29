import { IoMdClose } from "react-icons/io";
import ExperienceList from "@/sections/Experience/components/ExperienceList";

interface ExperienceDetailProps {
  setModal: (v: boolean) => void;
}

export default function ExperienceDetail({ setModal }: ExperienceDetailProps) {
  return (
    <div className="flex flex-col gap-6">
      <IoMdClose 
        onClick={() => setModal(false)}
        className="self-end cursor-pointer hover:text-light-coral md:text-xl text-base"
      />
      <ExperienceList />
    </div>
  );
}
