import Background from '@/app/ui/background';
import Title from '@/app/ui/title';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ExperienceContent from './experience-content';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Experiences({ background, title, id, data }: { background: string, title: string, id: string, data: any }) {
  return (
    <section id={id} className="relative min-h-screen w-full">
      <Background src={background} />
      <Title text={title} />
      <Carousel 
        responsive={responsive} dotListClass="custom-dot-list-style"
        showDots removeArrowOnDeviceType={["tablet", "mobile"]} containerClass="carousel-container"
      >
        {data.map((element: any, index: number) => {
          return (
            <ExperienceContent
              key={`experience-${title}-${index}`} 
              h1={element.h1} h2={element.h2}
              date={element.date} location={element.location}
              text={element.text}
            />
          );
        })}
      </Carousel>
    </section>
  )
}