import Background from '@/app/ui/background';
import Title from '@/app/ui/title';

export default function Experiences({ background, title, id }: { background: string, title: string, id: string }) {
  return (
    <section id={id} className="relative min-h-screen w-full">
      <Background src={background} />
      <Title text={title} />
    </section>
  )
}