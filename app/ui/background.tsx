import Image from "next/image";

export default function Background({ src }: { src: String }) {
  return (
    <Image
      src={`/backgrounds/${src}`}
      alt="Background image"
      fill
      unoptimized
      style={{ objectFit: "cover" }}
      className="-z-10"
    />
  )
}
