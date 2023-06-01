import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import ProjectIcon from "../ProjectIcon";
import projects from "../Projects.json";

export default function Home() {
  return (
    <main>
      <Navbar path="/" />
      <div className="relative bg-background flex h-max flex-col items-center justify-center self-center text-center text-textcolor p-6">
        <img src="/UnderConstruction.webp" alt="" />
      </div>
    </main>
  );
}