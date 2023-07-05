import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import ProjectIcon from "./BlogIcon";
import projects from "./Blogs";
import Blogs from "./Blogs";
import dynamic from 'next/dynamic';
import { useState } from 'react';

export default function Home() {
  return (
    <main>
      <Navbar path="/blogs" />
      <div className="bg-background grid h-full auto-rows-min gap-4 overflow-y-auto p-8 text-textcolor sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {Blogs.map(({ index, title, author, description, date, path }) => (
          <Link
            key={index}
            href={path}
            className="rounded-lg border bg-primary border-slate-800 shadow-xl transition-all duration-150 ease-linear hover:-translate-y-1 hover:border-slate-600"
          >
            <p className="p-4 text-center sm:text-lg md:text-xl lg:text-2xl">
              {title}
            </p>
            <div className="mx-4 flex flex-col">
              <p className="md:text-md py-0 text-sm md:py-1 lg:text-lg">
                Description:&nbsp;{description}
              </p>
              <p className="md:text-md py-0 text-sm md:py-1 lg:text-lg">
                Author:&nbsp;{author}
              </p>
              <p className="md:text-md pb-4 pt-0 text-sm md:pt-1 lg:text-lg">
                Date Created:&nbsp;{`${dayjs(date).format("MMM D, YYYY")}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
