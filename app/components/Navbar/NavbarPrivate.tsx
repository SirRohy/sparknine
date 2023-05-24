
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

interface navItem {
  label: string;
  path: string;
}

// TODO: update paths once pages are added
const items: navItem[] = [
  { label: "Learn", path: "/learn" },
  { label: "Courses", path: "/courses" },
  { label: "Browse", path: "/#" },
];

const NavbarPrivate = memo(function NavbarPrivate({ path }: { path: string }) {
  return (
    <nav className="sticky z-10 flex w-full items-center justify-between bg-slate-900 p-6 text-slate-200">
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
              Intellilearn
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

export default NavbarPrivate;
