import Image from "next/image";

export default function MyImage() {
  return (
    <aside className="
      relative w-full rounded border-light-coral 
      h-[20vh] md:h-[40vh]
    ">
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
