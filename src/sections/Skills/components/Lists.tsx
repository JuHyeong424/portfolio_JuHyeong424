import { category } from "@/app/data/skillsCategory";
import Image from "next/image";

interface ListsProps {
  selectedCategory: string;
}

export default function Lists({ selectedCategory }: ListsProps) {
  const selected = category.find((item) => item.id === selectedCategory);

  return (
    <div>
      list
      {selectedCategory}
      {selected?.technology?.map((value) => (
        <div key={value.id}>
          {value.name}
          <Image 
            src={value.icon}
            alt={value.name}
            width={12}
            height={12}
          />
        </div>
      ))}
    </div>
  )
}