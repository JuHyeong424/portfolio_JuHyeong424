import Image from "next/image";

export default function MyImage() {
  return (
    <aside className="relative flex-1 border-2 rounded border-light-coral h-[50vh] p-2">
      <Image 
        src="/myPicture.png"
        alt="My Picture"
        fill
        className="object-contain"
        priority
      />
    </aside>
  );
}
