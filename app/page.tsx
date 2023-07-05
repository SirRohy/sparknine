import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar path="/" />
      <div className="relative bg-background flex h-[calc(100vh-5rem)] w-screen flex-col items-center justify-center self-center text-center text-textcolor">
        <div className="relative">
          <Image
            src="/nature.jpg"
            alt="Image description"
            className="rounded-sm"
            width={250}
            height={150}
          />
        </div>
        <div className="p-4">
          <p className="w-full text-6xl max-sm:text-4xl font-medium">Spark9 Project</p>
          <p className="py-2 text-xl">We are a group of </p>
        </div>
        
      </div>
      
    </main>
  );
}
