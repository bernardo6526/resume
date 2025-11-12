import Background from '@/app/ui/background';
import Title from '@/app/ui/title';

export default function About({ background, title }: { background: string, title: string }) {
  return (
    <section id="about" className="relative min-h-screen w-full">
      <Background src={background} />
      <Title text={title} />
      <div className="flex items-center justify-center min-h-screen">
        <p className="p-5 z-10 text-left text-black md:text-lg text-xs whitespace-pre-line"
        >
          {`Fullstack Software Engineer with over 3 years of experience developing scalable, data-driven solutions across
          frontend and backend ecosystems. Proven track record enhancing operational efficiency and system reliability —
          including reducing backend deployment time by 75% and improving survey data capture by 50% across 5,000
          devices.

          Skilled in Node.js, React.js, Ruby on Rails, PostgreSQL, AWS, and Docker, with a strong background in
          performance optimization, cloud automation, and system integration. Passionate about clean architecture,
          continuous improvement, and delivering measurable business outcomes.

          Currently contributing to large-scale backend solutions at Hexagon Mining, where I focus on system optimization,
          data integration, and reliability engineering.

          Driven by collaboration, innovation, and technical excellence — always seeking to contribute to global-scale
          projects that create real-world impact.`}
        </p>
      </div>
    </section>
  )
}