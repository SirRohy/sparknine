"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselComponentProps {
  contents: React.ReactElement[];
  seconds: number;
  width: string;
}

const CarouselComponent = ({ contents, seconds, width }: CarouselComponentProps) => {

  return (
    <div className="w-full flex flex-shrink min-w-[300px]">
      <Carousel
        autoPlay={true}
        interval={seconds*1000}
        stopOnHover={true}
        infiniteLoop={true}
        emulateTouch={true}
        showIndicators={true}
        showThumbs={false}
        dynamicHeight={false}
        width={width}
      >
        {contents}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
