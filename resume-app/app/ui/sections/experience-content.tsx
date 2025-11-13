export default function ExperienceContent({ ...props }) {
  return (
    <div className="
      text-black md:text-lg text-sm flex flex-col items-center justify-center
      min-h-screen px-[5%] pb-[30%] md:pb-[10%]"
    >
      <div className="flex justify-between items-end md:w-[60%] w-[100%]">
        <div className="text-left">
          <h1 className="font-bold">{props.h1}</h1>
          <h2 className="italic">{props.h2}</h2>
        </div>
        <div className="text-right">
          <p className="md:text-sm text-xs">{props.date}</p>
          <p className="italic">{props.location}</p>
        </div>
      </div>
      <div className="flex justify-center md:w-[60%] w-[100%] mt-4">
        <p className="text-left text-black md:text-lg text-xs whitespace-pre-line">
          {props.text}
        </p>
      </div>
    </div>
  )
}
