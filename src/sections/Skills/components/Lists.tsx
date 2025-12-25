import { category } from "@/app/data/skillsCategory";
import Image from "next/image";

interface ListsProps {
  selectedCategory: string;
}

export default function Lists({ selectedCategory }: ListsProps) {
  const selected = category.find((item) => item.id === selectedCategory);

  return (
    <div className="flex flex-col flex-1 p-8 bg-light-navy border border-white/10 rounded-xl gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl">{selected?.name}</h2>
        <p className="text-sm">{selected?.explain}</p>
      </div>

      <div className="grid grid-cols-3 gap-8 place-items-center">
        {selected?.technology?.map((value) => (
          <div 
            key={value.id} 
            className="
            flex flex-col items-center border border-white/20 
            rounded-xl w-[16vw] p-8 gap-3
            transition-transform duration-300 ease-in-out
            hover:border-coral hover:scale-[1.04] hover-tech-glass
          ">
            <Image 
              src={value.icon} 
              alt={value.name} 
              width={36} 
              height={36} 
            />
            {value.name}
          </div>
        ))}
      </div>
    </div>
  );
}
