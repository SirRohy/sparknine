import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectIcon from "./BlogIcon";
import projects from "./Blogs.json";

export default function Home() {
  return (
    <main>
      <Navbar path="/blogs" />
      <div className="relative bg-background flex h-max flex-col items-center justify-center self-center text-center text-textcolor p-6">
        <img src="/UnderConstruction.webp" alt="" />
      </div>
    </main>
  );
}
