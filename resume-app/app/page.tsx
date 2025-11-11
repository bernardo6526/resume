'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Prevent Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('contextmenu', event => event.preventDefault());
    }
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <section id="home" className="relative min-h-screen w-full bg-blue flex items-center justify-center">
        <Image
          src="/backgrounds/home.png"
          alt="Background image"
          fill
          unoptimized // ⛔ disables Next.js image optimization
          style={{ objectFit: "cover" }}
        />
        <div className="inset-0 z-10 flex flex-col items-center justify-center text-white">
          <h1
            style={{ fontFamily: "var(--font-lastica)" }}
            className="font-lastica text-4xl font-bold ">
            Fullstack Engineer
          </h1>
          <Image
            src="/logo.png"
            alt="Logo image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '20%', height: 'auto' }}
            unoptimized // ⛔ disables Next.js image optimization
          />
        </div>
      </section>
      <section id="about" className="relative min-h-screen w-full bg-blue flex items-center justify-center">
        <Image
          src="/backgrounds/about.png"
          alt="Background image"
          fill
          unoptimized // ⛔ disables Next.js image optimization
          style={{ objectFit: "cover" }}
        />
        <div className="inset-0 z-10 flex flex-col items-center justify-center text-black">
          <h1
            style={{ fontFamily: "var(--font-lastica)" }}
            className="font-lastica text-4xl font-bold">
            About
          </h1>
        </div>
      </section>
      <section id="experiences" className="relative min-h-screen w-full bg-blue flex items-center justify-center">
        <Image
          src="/backgrounds/experience.png"
          alt="Background image"
          fill
          unoptimized // ⛔ disables Next.js image optimization
          style={{ objectFit: "cover" }}
        />
        <div className="inset-0 z-10 flex flex-col items-center justify-center text-black">
          <h1
            style={{ fontFamily: "var(--font-lastica)" }}
            className="font-lastica text-4xl font-bold">
            Experiences
          </h1>
        </div>
      </section>
      <section id="education" className="relative min-h-screen w-full bg-blue flex items-center justify-center">
        <Image
          src="/backgrounds/experience.png"
          alt="Background image"
          fill
          unoptimized // ⛔ disables Next.js image optimization
          style={{ objectFit: "cover" }}
        />
        <div className="inset-0 z-10 flex flex-col items-center justify-center text-black">
          <h1
            style={{ fontFamily: "var(--font-lastica)" }}
            className="font-lastica text-4xl font-bold">
            Education
          </h1>
        </div>
      </section>
      <section id="projects" className="relative min-h-screen w-full bg-blue flex items-center justify-center">
        <Image
          src="/backgrounds/experience.png"
          alt="Background image"
          fill
          unoptimized // ⛔ disables Next.js image optimization
          style={{ objectFit: "cover" }}
        />
        <div className="inset-0 z-10 flex flex-col items-center justify-center text-black">
          <h1
            style={{ fontFamily: "var(--font-lastica)" }}
            className="font-lastica text-4xl font-bold">
            Projects
          </h1>
        </div>
      </section>
      <section id="skills" className="relative min-h-screen w-full bg-blue flex items-center justify-center">
        <Image
          src="/backgrounds/experience.png"
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
    </div>
  );
}