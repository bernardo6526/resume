import Background from '@/app/ui/background';
import Title from '@/app/ui/title';

export default function Skills({ background }: { background: string }) {
  return (
    <section id="skills" className="relative min-h-screen w-full">
      <Background src={background} />
      <Title text="Skills" />
    </section>
  )
}