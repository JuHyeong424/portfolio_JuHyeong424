import Title from "@/components/common/Title";

const title = {
  num: '02',
  name: 'Skills'
}

export default function Skills() {
  return (
    <main 
      id="Skills" 
      className="relative h-screen snap-start"
    >
      <Title num={title.num} name={title.name} />
    </main>
  )
}