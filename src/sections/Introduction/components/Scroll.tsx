export default function Scroll() {
  return (
    <div className="
      absolute bottom-[5vh] xl:bottom-[15vh] md:bottom-[10vh] 
      left-1/2 -translate-x-1/2 z-50 flex flex-col items-center
    ">
        <span className="text-[6px] xl:text-[10px] md:text-[9px] mb-2 font-fira-code"
        >
          Scroll Down
        </span>
        <div className="relative w-2 h-6 md:w-5 md:h-10 border-2 rounded-2xl">
          <span className="
            absolute top-2 left-1/2 -translate-x-1/2 w-0.5 md:w-1 h-2 md:h-3.5
          bg-light-coral rounded-full animate-float
        " />
        </div>
      </div>
  )
}