import { category } from "@/app/data/skillsCategory";
import Image from "next/image";

interface ListsProps {
  selectedCategory: string;
}

export default function Lists({ selectedCategory }: ListsProps) {
  const selected = category.find((item) => item.id === selectedCategory);

  return (
    <div className="
      flex flex-col flex-1 bg-light-navy border border-white/10 rounded-xl
      md:gap-6 md:p-6 xl:gap-8 xl:p-8 gap-4 p-4
    ">
      <div className="flex flex-col md:gap-4">
        <h2 className="hidden md:block md:text-xl lg:text-2xl xl:text-3xl">{selected?.name}</h2>
        <p className="md:text-xs lg:text-sm text-[10px]">{selected?.explain}</p>
      </div>

      <div className="
        grid grid-cols-3 place-items-center
        gap-4 md:gap-6 lg:gap-3 xl:gap-6
      ">
        {selected?.technology?.map((value) => (
          <div 
            key={value.id} 
            className="
            flex flex-col items-center border border-white/20 
            transition-transform duration-300 ease-in-out
            hover:border-coral hover:scale-[1.04] hover-tech-glass
            rounded-xl xl:w-[15vwl xl:p-8 lg:w-[12vw] lg:p-6 md:w-[16vw] md:p-8 
            gap-3 p-4 w-[20vw] text-center
          ">
            <Image 
              src={value.icon} 
              alt={value.name} 
              width={36} 
              height={36}
              className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12"
            />
            <span className="md:text-xs lg:text-sm xl:text-base text-[10px]">{value.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
