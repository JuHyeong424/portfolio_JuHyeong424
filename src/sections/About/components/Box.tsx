import { IoEyeOutline } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";

const article = [
  {
    icon: <IoEyeOutline />,
    title: "예측 가능한 UX",
    content: "로딩, 에러, 빈 상태 등 모든 상황에서 사용자가 현재 상태를 이해할 수 있도록 돕습니다."
  },
  {
    icon: <BsCodeSlash />,
    title: "기술의 본질",
    content: "기술은 사용자 경험을 개선하기 위한 수단이며, 유지보수하기 쉬운 구조가 결국 안정적인 서비스로 이어진다고 믿습니다."
  },
]

export default function Box() {
  return (
    <section className="flex flex-col gap-4">
      {article.map((value) => (
        <article 
          key={value.title}
          className="flex flex-col bg-light-navy rounded-xl border border-white/10 p-8 gap-2"
        >
          <header className="flex flex-row font-extrabold text-light-coral text-xl items-center">
            {value.icon}
            <h2 className="text-light-coral px-2">{value.title}</h2>
          </header>
          <p>{value.content}</p>
      </article>
      ))}
    </section>
  );
}
