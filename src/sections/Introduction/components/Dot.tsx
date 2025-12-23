export default function Dot() {
  return (
    <div className="absolute top-[10vh] inset-0 z-10 pointer-events-none">
        <span className="absolute top-[14vh] left-[8vw] w-2.5 h-2.5 rounded-full animate-very-slow-blink" />
        <span className="absolute top-[24vh] right-[12vw] w-2.5 h-2.5 rounded-full animate-slow-blink" />
        <span className="absolute top-[55vh] right-[18vw] w-2.5 h-2.5 rounded-full animate-fast-blink" />
        <span className="absolute top-[63vh] left-[20vw] w-2.5 h-2.5 rounded-full animate-normal-blink" />
    </div>
  )
}
