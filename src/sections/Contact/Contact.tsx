import Title from "@/components/common/Title";
import ContactLink from "@/sections/Contact/components/ContactLink";

const title = {
  num: "05",
  name: "Contact",
};

export default function Contact() {
  return (
    <main id="Contact" className="relative h-screen snap-start">
      <Title num={title.num} name={title.name} />

      <section className="
        flex flex-col w-full relative
        xl:top-42 xl:gap-10
        lg:top-40 lg:gap-6
        md:top-40 md:gap-6
        top-32 gap-4
      ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="md:text-2xl text-base">끝까지 읽어주셔서 감사합니다.</h2>
          <p className="md:text-base text-sm">부족하지만 언제나 성장할 수 있는 사람이 되겠습니다.</p>
        </div>
        <ContactLink />
      </section>
    </main>
  );
}
