import Image from "next/image";

export default function ExperienceContent({ ...props }) {
  return (
    <div className="
      text-black md:text-lg text-sm flex items-center justify-center
      h-[90vh] px-[5%] pb-[30%] md:pb-[10%]"
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-end w-full md:text-[100%] text-[80%]">
          <div className="text-left">
            <h1 className="font-bold">{props.h1}</h1>
            <h2 className="italic">{props.h2}</h2>
          </div>
          <div className="text-right">
            <p className="md:text-sm text-xs md:text-[100%] text-[80%]">{props.date}</p>
            <p className="italic">{props.location}</p>
          </div>
        </div>
        {props.image != "" &&
          <div className="flex justify-center items-center relative mt-4">
            <Image
              src={`${props.image}`}
              alt="Logo image"
              width={0}
              height={0}
              sizes="100vw"
              className="md:w-[50%] w-[60%]"
              unoptimized
            />
          </div>
        }
        <div className="mt-4">
          <p className="text-left text-black md:text-lg text-xs whitespace-pre-line">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  )
}
