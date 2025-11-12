export default function Title({ text }: { text: string }) {
  return (
    <div className="absolute pt-10 pl-[5%] z-10 text-black w-fit h-fit">
        <h1
          style={{ fontFamily: "var(--font-lastica)" }}
          className="
            relative inline-block leading-none m-0 p-0
            md:text-4xl text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-800 bg-clip-text text-transparent"
        >
          {text}
          <span
            className="
              absolute bottom-0 left-0 w-full h-[2px]
              bg-gradient-to-r from-cyan-400 to-blue-800
              rounded-full"
          ></span>
        </h1>
      </div>
  )
}