import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import members from "./Members.json";
import CarouselComponent from "@/app/components/CarouselComponent";

export default function Home() {
  const images = [
    "/nature.jpg",
    "/nature.jpg",
    "/nature.jpg",
    // Add more image URLs
  ];
  return (
    <main>
      <Navbar path="/about-us" />
      <div className="relative bg-background flex h-max flex-col items-center justify-center self-center text-center text-textcolor p-6">
        <div className="h-screen">
          <div>
            <h1>Welcome to my Picture Carousel</h1>
            <CarouselComponent
              contents={images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt={`Slide ${index}`}
                    width={50}
                    height={-1}
                  />
                </div>
              ))}
              seconds={5}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
