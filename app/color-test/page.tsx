import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar path="/" />
      <div className="absolute inset-0 -z-10 flex h-screen flex-col items-center justify-center self-center text-center text-slate-300">
        <div className="p-4">
          <p className="w-full p-8 text-6xl font-medium">Spark9 Background</p>
        </div>
        <Link
          className="rounded-sm border px-8 py-2 text-3xl font-medium hover:border-slate-100/20"
          href={"/learn"}
        >
          <p>Get started for free</p>
        </Link>
        <div className="absolute h-2/3 w-2/3 grid grid-cols-3 border-4 border-bordercolor bg-white">
          <div className="border bg-primary border-black text-textcolor flex items-center justify-center">
            Primary Color
          </div>
          <div className="bg-secondary text-textcolor border border-black flex items-center justify-center">
            Secondary Color
          </div>
          <div className="bg-tertiary text-textcolor border border-black flex items-center justify-center">
            Tertiary Color
          </div>
        </div>
      </div>
    </main>
  );
}
