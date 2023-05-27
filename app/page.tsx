import Link from "next/link";
import Image from "next/image";
import NavbarPublic from "./components/Navbar/NavbarPublic";

export default function Home() {
  return (
    <main>
      <NavbarPublic path="/" />
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
          <p className="w-full p-8 text-6xl font-medium">Spark9 Background</p>
        </div>
        <Link
          className="rounded-sm border px-8 py-2 text-3xl font-medium hover:border-slate-100/20"
          href={"/learn"}
        >
          <p>Get started for free</p>
        </Link>
      </div>
      <div className="h-screen bg-transparent"></div>
    </main>
  );
}
