import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

interface navItem {
  label: string;
  path: string;
}

interface authItem {
  label: string;
  styles: string;
  path: string;
  divStyles: string;
}

// TODO: update paths once pages are added
const items: navItem[] = [
  { label: "Projects", path: "/projects" },
  { label: "Blogs", path: "/blogs" },
  { label: "About Us", path: "/about-us" },
  { label: "Donations", path: "/#" },
];

const authButtons: authItem[] = [
  {
    label: "Sign in",
    path: "/signin",
    styles:
      "text-xl font-medium transition ease-linear duration-100 hover:text-blue-400/80",
    divStyles: "m-2 mx-4",
  },
  {
    label: "Sign up",
    path: "/signup",
    styles:
      "text-xl font-medium transition ease-linear duration-100 bg-blue-700 p-2 px-4 rounded-xl hover:bg-opacity-70",
    divStyles: "ml-2",
  },
];

const Navbar = memo(function Navbar({ path }: { path: string }) {
  return (
    <nav className="sticky top-0 h-20 z-10 flex w-full items-center justify-between bg-slate-900 p-6 text-slate-200">
      <div>
        <Link href={"/"}>
          <div className="flex">
            <Image src="/logo.svg" alt="Spark9 Logo" width={35} height={35} />
            <p className="pl-2 text-center text-3xl font-semibold">Spark9</p>
          </div>
        </Link>
      </div>
      <ul className="flex justify-between w-full max-w-screen-sm">
        {items.map((item) => (
          <li key={item.label} className="p-2 flex justify-between">
            <Link href={item.path}>
              <p
                className={`text-xl font-medium transition duration-100 ease-linear ${
                  path === item.path
                    ? "text-blue-600"
                    : "hover:text-blue-400/80"
                }`}
              >
                {item.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-white">Dark Mode</div>
    </nav>
  );
});

export default Navbar;
