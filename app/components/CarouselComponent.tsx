"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselComponentProps {
  contents: React.ReactElement[];
  seconds: number;
}

const CarouselComponent = ({ contents, seconds }: CarouselComponentProps) => {

  return (
    <div className="flex">
      <Carousel
        autoPlay={true}
        interval={seconds*1000}
        stopOnHover={true}
        infiniteLoop={true}
        emulateTouch={true}
        showIndicators={true}
        showThumbs={false}
      >
        {contents}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
