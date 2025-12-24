interface TitleProps {
  num: string;
  name: string;
}

export default function Title({ num, name }: TitleProps) {
  return (
    <div className="
      absolute flex items-center
      xl:top-28 xl:left-0 xl:right-0 xl:gap-2 xl:text-2xl
      lg:top-28 lg:left-0 lg:right-0 lg:gap-2 lg:text-xl
      md:top-28 md:left-0 md:right-0 md:gap-2 md:text-base
      top-24 left-0 right-0 gap-2 text-sm
    ">
      <h1 className="text-light-coral font-fira-code">{num}.</h1>
      <h1 className="font-fira-code md:mx-2">{name}</h1>
      <div className="flex-1 border-t border-white/20"></div>
    </div>
  );
}
