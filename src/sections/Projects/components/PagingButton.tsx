import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import type { Dispatch, SetStateAction } from "react";

interface PagingButtonProps {
  total: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export default function PagingButton({ total, setCurrentIndex }: PagingButtonProps) {
  const handlePrev = () => {
      setCurrentIndex((prev: number) => {
        return prev === 0 ? total - 1 : prev - 1;
      });
    };
  
    const handleNext = () => {
      setCurrentIndex((prev: number) => {
        return prev === total - 1 ? 0 : prev + 1;
      });
    };

  return (
    <aside>
      <button
        aria-label="previous button"
        onClick={handlePrev}
        className="
              absolute -left-24 top-1/2 -translate-y-1/2 cursor-pointer
              flex items-center justify-center border rounded-full w-12 h-12
              hover:border-light-coral hover:text-light-coral
            "
      >
        <GrFormPrevious />
      </button>
      <button
        aria-label="next button"
        onClick={handleNext}
        className="
              absolute -right-24 top-1/2 -translate-y-1/2 cursor-pointer
              flex items-center justify-center border rounded-full w-12 h-12
              hover:border-light-coral hover:text-light-coral
            "
      >
        <GrFormNext />
      </button>
    </aside>
  );
}
