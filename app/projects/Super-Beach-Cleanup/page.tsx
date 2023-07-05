import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import ProjectIcon from "../ProjectIcon";
import projects from "../Projects";

export default function Home() {
  return (
    <main>
      <Navbar path="/" />
      <div className="relative bg-background flex h-max flex-col items-center justify-center self-center text-center text-textcolor p-6">
        <div className="grid grid-col-1 2xl:grid-col-2">
          <h1 className="text-6xl">Super Beach Cleanup</h1>
          <p className="text-3xl font-bold">Location:</p>
          <p className="text-3xl font-bold">Date:</p>
          <p className="text-3xl font-bold">Description:</p>
        </div>
      </div>
    </main>
  );
}
