import React from "react";
import Background from "@/app/ui/background";
import Title from "@/app/ui/title";
import { skills } from "@/app/data/objects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 10 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 5 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 4 }
};

export default function Skills({ background }: { background: string }) {
  return (
    <section id="skills" className="relative min-h-screen w-full">
      <Background src={background} />
      <Title text="Skills" />
      <div className="text-black">
        <div className="flex flex-col justify-start p-5">
          {skills.map((element, index1) => (
            <React.Fragment key={`skills-block-${index1}`}>
              <p className="py-5 text-left md:text-lg text-xs">
                {element.category}
              </p>

              <Carousel
                responsive={responsive}
                autoPlay
                infinite
                removeArrowOnDeviceType={["tablet", "mobile"]}
                containerClass="carousel-container"
              >
                {element.items.map((item, index2) => (
                  <div
                    key={`skills-item-${index1}-${index2}`}
                    className="flex items-center justify-center"
                  >
                    <span className="flex items-center justify-center 
                      text-white md:text-lg text-xs text-center
                      bg-gradient-to-r from-cyan-400 to-blue-800 rounded-sm 
                      basis-3xs md:min-h-20 min-h-10"
                    >
                      {item}
                    </span>
                    <span className="p-2">

                    </span>
                  </div>
                ))}
              </Carousel>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
