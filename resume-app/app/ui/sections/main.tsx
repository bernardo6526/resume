import Image from "next/image";
import Background from '@/app/ui/background';

export default function Main({ background, logo }: { background: string, logo: string }) {

  return (
    <section id="home" className="relative min-h-screen w-full bg-blue flex items-center justify-center">
      <Background src={background} />
      <div className="inset-0 z-10 flex flex-col items-center justify-center text-white">
        <h1
          style={{ fontFamily: "var(--font-lastica)" }}
          className="font-lastica md:text-6xl text-4xl font-bold justify-center text-center ">
          Fullstack Engineer
        </h1>
        <Image
          src={`${logo}`}
          alt="Logo image"
          width={0}
          height={0}
          sizes="100vw"
          className="md:w-100 w-70"
          unoptimized
        />
      </div>
    </section>
  )
}
