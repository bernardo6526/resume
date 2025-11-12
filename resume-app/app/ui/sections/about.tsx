import Image from "next/image";

export default function About({ background, title }: { background: string, title: string }) {
  return (
    <section id="about" className="relative min-h-screen w-full grid grid-cols-3">
      <Image
        src={`/backgrounds/${background}`}
        alt="Background image"
        fill
        unoptimized // ⛔ disables Next.js image optimization
        style={{ objectFit: "cover" }}
      />
      <div className="pt-10 pl-10 col-span-3 z-10 text-black w-fit h-fit">
        <h1
          style={{ fontFamily: "var(--font-lastica)" }}
          className="
            relative inline-block leading-none m-0 p-0
            text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-800 bg-clip-text text-transparent"
        >
          {title}
          <span
            className="
              absolute bottom-0 left-0 w-full h-[2px]
              bg-gradient-to-r from-cyan-400 to-blue-800
              rounded-full"
          ></span>
        </h1>
      </div>
      <p className="p-0 m-0 pl-[6%] pt-[1%] text-left col-span-3 z-10 text-black whitespace-pre-line md:text-lg text-xs">
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
    </section>
  )
}