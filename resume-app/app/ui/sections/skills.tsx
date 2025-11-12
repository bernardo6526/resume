import Image from "next/image";

export default function Skills({ background }: { background: string }) {
  return (
    <section id="skills" className="relative min-h-screen w-full bg-blue flex items-center justify-center">
      <Image
        src={`/backgrounds/${background}`}
        alt="Background image"
        fill
        unoptimized // ⛔ disables Next.js image optimization
        style={{ objectFit: "cover" }}
      />
      <div className="inset-0 z-10 flex flex-col items-center justify-center text-black">
        <h1
          style={{ fontFamily: "var(--font-lastica)" }}
          className="font-lastica text-4xl font-bold">
          Skills
        </h1>
      </div>
    </section>
  )
}