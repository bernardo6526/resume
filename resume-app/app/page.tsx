import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/backgrounds/home.png"
        alt="Background image"
        fill
        unoptimized // ⛔ disables Next.js image optimization
        style={{ objectFit: "cover" }}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <h1 
          style={{ fontFamily: "var(--font-lastica)" }}
          className="font-lastica text-4xl font-bold ">
          Fullstack Engineer
        </h1>
      </div>
    </div>
  );
}