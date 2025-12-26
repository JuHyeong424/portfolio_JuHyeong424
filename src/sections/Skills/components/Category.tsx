import { category } from "@/app/data/skillsCategory";

interface CategoryProps {
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}


export default function Category({ selectedCategory, setSelectedCategory }: CategoryProps) {
  const onClickSkills = (id: string) => {
    setSelectedCategory(id);
  };

  return (
    <div className="
      grid grid-cols-2 gap-2
      md:flex md:flex-col md:gap-4
    ">
      {category.map((value) => (
        <div
          key={value.id}
          onClick={() => onClickSkills(value.id)}
          className={`
            flex cursor-pointer justify-center
            transition-transform duration-300 ease-in-out 
            group hover:scale-[1.04] hover:border-coral
            border rounded-xl bg-light-navy
            xl:w-[20vw] lg:w-[20vw] lg:h-[14vh] md:w-[30vw] md:h-[12vh] md:px-4 md:py-3 flex-col
            px-3 py-2 w-full lg:px-6
            ${selectedCategory === value.id ? "glass" : "border-white/10 hover:border-coral"}
          `}>
          <div className="
            flex flex-row items-center md:gap-3
            gap-2 lg:gap-4
          ">

            <div className={`
              hidden md:flex items-center justify-center 
              transition-transform duration-300 ease-in-out group-hover:rotate-12
              ${value.color} md:p-3 md:rounded-xl md:w-8 md:h-8
              w-4 h-4 rounded-sm p-3 lg:rounded-2xl lg:w-10 lg:h-10
              xl:rounded-2xl xl:w-12 xl:h-12
            `}>
              {value.icon}
            </div>
            
            <div className="flex flex-col justify-center gap-1">
              <h2 className="xl:text-xl lg:text-base md:text-base text-xs">{value.name}</h2>
              <span className="xl:text-sm lg:text-xs md:text-xs text-[10px] text-slate/50">{value.count}</span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
