"use client";

import { memo, useState } from "react";

// import { TailcastLogo } from "../assets/logos/TailcastLogo";
// import { GithubIcon } from "../assets/icons/GithubIcon";

const NavbarCollapsed = memo(function NavbarCollapsed({
  items,
}: {
  items: {
    label: string;
    href: string;
  }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="z-40 hidden max-sm:flex">
      <div className="flex h-20 w-full flex-col items-center justify-center">
        <div
          className="flex cursor-pointer flex-col rounded-md border border-solid border-gray-600 px-2 py-3 hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="mb-1 h-0.5 w-5  bg-gray-500"></div>
          <div className="mb-1 h-0.5 w-5  bg-gray-500"></div>
          <div className="h-0.5 w-5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <div>
        {isOpen && (
          <div>
            <div
              className="absolute left-0 top-20 z-50 flex w-full flex-col items-center"
            >
              {items.map(({ label, href }) => (
                <a
                  key={href}
                  className="h-[50px] bg-slate-700 w-screen flex justify-center items-center border-y-[1px] text-lg font-medium"
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default NavbarCollapsed;
