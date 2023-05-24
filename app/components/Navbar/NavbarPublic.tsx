
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
  { label: "Projects", path: "/#" },
  { label: "Blogs", path: "/#" },
  { label: "Contact Us", path: "/#" },
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

const NavbarPublic = memo(function NavbarPublic({ path }: { path: string }) {
  return (
    <nav className="z-10 flex w-full items-center justify-between bg-slate-900 p-6 text-slate-200">
      <div>
        <Link href={"/"}>
          <div className="flex">
            <Image
              src="/logo.svg"
              alt="Intellilearn Logo"
              width={35}
              height={35}
            />
            <p className="pl-2 text-center text-3xl font-semibold">
              Spark9 Project
            </p>
          </div>
        </Link>
      </div>
      <ul className="flex justify-center">
        {items.map((item) => (
          <li key={item.label} className="p-2 px-8">
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
    </nav>
  );
});

export default NavbarPublic;
