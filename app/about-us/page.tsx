import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import members from "./Members";
import CarouselComponent from "@/app/components/CarouselComponent";
import MembersCarousel from "./MembersCarousel";

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
            <MembersCarousel />
          </div>
          <div className="flex flex-col items-center justify-start self-start text-center col-span-1 2xl:col-span-2 max-w-screen p-4">
            <h2 className="text-6xl pb-4">Our Socials:</h2>
            <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
              <div className="relative flex flex-col justify-start bg-inherit w-full max-w-screen max-h-screen mb-1">
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
              <div className="relative flex flex-col justify-start bg-inherit w-full max-w-screen max-h-screen mb-1">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100093136684134&mibextid=LQQJ4d"
                  }
                >
                  <div className="relative flex flex-row text-2xl">
                    <img
                      src={"Facebook.png"}
                      alt={`Facebook`}
                      className="w-10 h-10 object-contain"
                    />
                    <p className="pl-3">Spark 9 Project</p>
                  </div>
                </Link>
              </div>
              <div className="relative flex flex-col justify-start bg-inherit w-full max-w-screen max-h-screen mb-1">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100093136684134&mibextid=LQQJ4d"
                  }
                >
                  <div className="relative flex flex-row text-2xl">
                    <img
                      src={"Linkedin.png"}
                      alt={`Linkedin`}
                      className="w-10 h-10 object-contain"
                    />
                    <p className="pl-3">Spark-9-Project</p>
                  </div>
                </Link>
              </div>
              <div className="relative flex flex-col justify-start bg-inherit w-full max-w-screen max-h-screen mb-1">
                <Link href={"https://www.tiktok.com/@spark9project"}>
                  <div className="relative flex flex-row text-2xl">
                    <img
                      src={"Tiktok.png"}
                      alt={`Tiktok`}
                      className="w-10 h-10 object-contain"
                    />
                    <p className="pl-3">@spark9project</p>
                  </div>
                </Link>
              </div>
              <div className="relative flex flex-col justify-start bg-inherit w-full max-w-screen max-h-screen mb-1">
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
      </div>
    </main>
  );
}
