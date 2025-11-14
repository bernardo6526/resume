import Background from '@/app/ui/background';
import Title from '@/app/ui/title';
import {about} from '@/app/data/objects';

export default function About({ background, title }: { background: string, title: string }) {
  return (
    <section id="about" className="relative min-h-screen w-full">
      <Background src={background} />
      <Title text={title} />
      <div className="flex items-center justify-center pt-[10%]">
        <p className="p-5 z-10 text-left text-black md:text-lg text-xs whitespace-pre-line"
        >
          {about.text}
        </p>
      </div>
    </section>
  )
}