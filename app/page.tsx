import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar path="/" />
      <div className="relative bg-background flex h-screen flex-col items-center justify-center self-center text-center text-textcolor">
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
          <p className="w-full p-8 text-6xl font-medium">Spark9 Project</p>
        </div>
        
      </div>
      
    </main>
  );
}
