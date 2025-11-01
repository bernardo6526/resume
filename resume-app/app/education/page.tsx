import Image from "next/image";

export default function Education() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/backgrounds/experience.png"
        alt="Background image"
        fill
        unoptimized // ⛔ disables Next.js image optimization
        style={{ objectFit: "cover" }}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-black">
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <p>This is content on top of the background image.</p>
      </div>
    </div>
  );
}