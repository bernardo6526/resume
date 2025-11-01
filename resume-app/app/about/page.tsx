import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/backgrounds/about.png"
        alt="Background image"
        fill
        unoptimized // ⛔ disables Next.js image optimization
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}