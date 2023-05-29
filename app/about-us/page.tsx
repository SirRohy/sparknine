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
        <div className="h-max w-screen grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center col-span-2 xl:col-span-1">
            <h1 className="text-6xl">Our Members:</h1>
            <CarouselComponent
              contents={members.map((member, index) => {
                const imageUrl = member.imageAddress
                  ? member.imageAddress
                  : "/Members/anonymous.png";
                return (
                  <div className="h-[880px] w-[82px] rounded-lg">
                    <div key={index} className="h-[700px] w-[900px]">
                      <div className="relative w-[100%] h-[100%]">
                        <img
                          src={imageUrl}
                          alt={`Slide ${index}`}
                          className="object-fill w-[100%] h-[100%]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-[900px] h-[180px] bg-secondary">
                      <p className="text-xl">
                        <strong>{member.name}</strong>
                      </p>
                      <p className="text-lg">
                        <strong>Roles:</strong> {member.Roles}
                      </p>
                      <p className="text-lg">
                        <strong>Phone:</strong> {member.phone}
                      </p>
                      <p className="text-lg">
                        <strong>Email:</strong> {member.email}
                      </p>
                    </div>
                  </div>
                );
              })}
              seconds={5}
            />
          </div>
          <div className="flex flex-col items-center col-span-2 xl:col-span-1">
            <h2 className="text-6xl">Our Socials:</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
