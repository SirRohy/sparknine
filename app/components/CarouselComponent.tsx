"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselComponentProps {
  contents: React.ReactElement[];
  seconds: number;
  width: string;
  get_select_index?: (index: number, item: React.ReactNode) => void;
}

const CarouselComponent = ({ contents, seconds, width, get_select_index }: CarouselComponentProps) => {

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
        onChange={get_select_index}
      >
        {contents}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
