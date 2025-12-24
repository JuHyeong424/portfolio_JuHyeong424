interface TitleProps {
  num: string;
  name: string;
}

export default function Title({ num, name }: TitleProps) {
  return (
    <div className="absolute top-28 left-0 right-0 flex items-center gap-2 text-2xl">
      <h1 className="text-light-coral font-fira-code">{num}.</h1>
      <h1 className="font-fira-code mx-2">{name}</h1>
      <div className="flex-1 border-t border-white/20"></div>
    </div>
  );
}
