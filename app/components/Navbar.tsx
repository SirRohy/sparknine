import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import NavbarCollapsed from "./NavbarCollapsed";

// TODO: update paths once pages are added
const items = [
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about-us" },
  { label: "Donations", href: "/donations" },
];

const Navbar = memo(function Navbar({ path }: { path: string }) {
  return (
    <nav className="sticky top-0 h-20 z-20 flex w-screen items-center justify-between bg-slate-900 p-6 text-slate-200">
      <div>
        <Link href={"/"}>
          <div className="flex mr-5">
            <Image
              src="/Logo-white.png"
              alt="Spark9 Logo"
              width={150}
              height={-1}
            />
          </div>
        </Link>
      </div>
      <ul className="max-sm:hidden flex justify-between w-full max-w-screen-sm">
        {items.map((item) => (
          <li key={item.label} className="p-2 flex justify-between">
            <Link href={item.href}>
              <p
                className={`text-xl font-medium transition duration-100 ease-linear ${
                  path === item.href
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
      <div>
        <NavbarCollapsed items={items} />
      </div>
    </nav>
  );
});

export default Navbar;
