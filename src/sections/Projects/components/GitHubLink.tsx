import { FaGithub } from "react-icons/fa";
import { projects } from "@/app/data/projects";

interface GitHubLinkProps {
  currentIndex: number;
}

export default function GitHubLink({ currentIndex }: GitHubLinkProps) {
  return (
    <a
      href={projects[currentIndex].url}
      target="_blank"
      aria-label="GitHub 저장소로 이동"
      className="
        flex w-full border mt-auto p-2 rounded-xl cursor-pointer
        items-center justify-center hover:border-light-coral hover:text-light-coral
      ">
        <FaGithub />
      </a>
  )
}
