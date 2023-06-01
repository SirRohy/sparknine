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
      <div className="relative bg-background flex h-max text-textcolor p-6 max-sm:p-0">
        <div className="w-screen grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 items-center gap-10">
          <div className="flex flex-col flex-[1_1_100%] items-center justify-start w-full max-sm:w-screen max-sm:p-0 h-min max-h-[1200px] p-4 col-span-2">
            <h1 className="text-6xl pb-4">Our Members:</h1>
            <div className="relative max-w-screen bg-secondary">
              <CarouselComponent
                contents={members.map((member, index) => {
                  const imageUrl = member.imageAddress
                    ? member.imageAddress
                    : "/Members/anonymous.png";
                  return (
                    <div key={index} className="h-[100%] max-h-[1000px]">
                      <div className="flex w-full max-sm:h-[90%] max-md:h-[75%] max-lg:h-[80%] h-[80%] max-h-screen">
                        <div className="relative flex flex-col justify-center bg-inherit w-[100%] max-w-screen max-h-screen">
                          <img
                            src={imageUrl}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="absolute w-full flex flex-col items-center bg-secondary pb-7">
                        <p className="text-xl">
                          <strong>{member.name}</strong>
                        </p>
                        <p className="text-lg flex flex-wrap">
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
                width={"100%"}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start self-start text-center col-span-1 xl:col-span-2 max-w-screen p-4">
            <h2 className="text-6xl pb-4">Our Socials:</h2>
            <div className="relative flex flex-col justify-start bg-inherit w-full max-w-screen max-h-screen">
              <Link href={"https://www.instagram.com/spark9project/"}>
                <div className="relative flex flex-row text-2xl">
                  <img
                    src={"Instagram.png"}
                    alt={`Instagram`}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="pl-2">&#64;spark9project</p>
                </div>
              </Link>
            </div>
            <div className="relative flex flex-col justify-start bg-inherit w-full max-w-screen max-h-screen">
              <Link href={"mailto:spark9project@gmail.com"}>
                <div className="relative flex flex-row text-2xl">
                  <img
                    src={"Gmail.png"}
                    alt={`Gmail`}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="pl-3">spark9project&#64;gmail.com</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
