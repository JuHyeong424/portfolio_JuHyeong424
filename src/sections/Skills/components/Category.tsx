import { category } from "@/app/data/skillsCategory";

interface CategoryProps {
  setSelectedCategory: (id: string) => void;
}


export default function Category({ setSelectedCategory }: CategoryProps) {
  const onClickSkills = (id: string) => {
    setSelectedCategory(id);
  };

  return (
    <div className="flex flex-col gap-4">
      {category.map((value) => (
        <div
          key={value.id}
          onClick={() => onClickSkills(value.id)}
          className="
            flex flex-col cursor-pointer
            transition-transform duration-300 ease-in-out 
            group hover:scale-[1.04] hover:border-coral
            border border-white/10 rounded bg-light-navy
            w-[20vw] h-[12vh] p-4 
        ">
          <div className="
            flex flex-row items-center gap-4
            text-2xl
          ">

            <div className={`
              flex items-center justify-center 
              transition-transform duration-300 ease-in-out group-hover:rotate-12
              ${value.color} p-3 rounded-2xl w-12 h-12
            `}>
              <h2 className="">{value.icon}</h2>
            </div>
            
            <div className="flex flex-col gap-1">
              <h2 className="text-xl">{value.name}</h2>
              <span className="text-sm text-slate/50">{value.count}</span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
