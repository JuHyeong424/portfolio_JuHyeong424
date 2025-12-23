export default function Comment() {
  return (
    <>
      <p className="text-light-coral font-fira-code lg:mb-6 mb-2">
        안녕하세요, 저는
      </p>
      <p className="text-white/95 font-bold xl:text-8xl lg:text-7xl md:text-6xl text-xl">
        장주형입니다
      </p>
      <p className="xl:text-5xl lg:text-4xl md:text-2xl text-xs font-bold my-4">
        사용자 경험을 설계하는 프론트엔드 개발자
      </p>
      <p className="mt-2 my-6 md:text-xs text-[10px]">
        사용자의 흐름을 먼저 고민하며,
        <span className="font-bold"> React</span>와
        <span className="font-bold"> TypeScript</span>로 이해하기 쉬운 UI를
        만듭니다.
      </p>
    </>
  );
}
