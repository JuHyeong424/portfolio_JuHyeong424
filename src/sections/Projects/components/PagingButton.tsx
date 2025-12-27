import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import type { Dispatch, SetStateAction } from "react";

interface PagingButtonProps {
  setDirection: Dispatch<SetStateAction<-1 | 1>>;
  total: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export default function PagingButton({ setDirection, total, setCurrentIndex }: PagingButtonProps) {
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev: number) => {
      return prev === 0 ? total - 1 : prev - 1;
    });
  };
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev: number) => {
      return prev === total - 1 ? 0 : prev + 1;
    });
  };

  return (
    <aside className="absolute inset-0">
      <button
        aria-label="previous button"
        onClick={handlePrev}
        className="
          absolute cursor-pointer hover:border-light-coral hover:text-light-coral
          flex items-center justify-center border rounded-full w-12 h-12
          lg:-left-24 lg:top-1/2 lg:-translate-y-1/2
          md:bottom-12 md:left-1/3
          bottom-12 left-1/5
        ">
        <GrFormPrevious />
      </button>
      <button
        aria-label="next button"
        onClick={handleNext}
        className="
          absolute cursor-pointer hover:border-light-coral hover:text-light-coral
          flex items-center justify-center border rounded-full w-12 h-12
          lg:-right-24 lg:top-1/2 lg:-translate-y-1/2 pointer-events-auto
          md:bottom-12 md:right-1/3
          bottom-12 right-1/5
        ">
        <GrFormNext />
      </button>
    </aside>
  );
}
