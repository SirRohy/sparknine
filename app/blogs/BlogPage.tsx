"use client";

import { memo } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Blogs, { fallbackBlog } from "./Blogs";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

const BlogPage = memo(function BlogPage({
  blogOpenIndex,
  setBlogOpenIndex,
}: {
  blogOpenIndex: number;
  setBlogOpenIndex: (index: number) => void;
}) {
  const blog = Blogs.find((obj) => obj.index === blogOpenIndex) ?? fallbackBlog;
  if (blogOpenIndex == -1) return;
  return (
    <div className="absolute top-[80px] min-h-[calc(100vh-5rem)] h-max w-screen z-10">
      <div
        data-simplebar
        className="custom-scroll absolute h-[calc(100vh-5rem)] 2xl:w-2/3 xl:w-3/4 lg:w-4/5 max-lg:w-full left-1/2 transform -translate-x-1/2 bg-tertiary rounded-xl border-2 border-black overflow-y-auto"
      >
        <button
          className="sticky top-4 left-full mr-3 flex flex-row items-center"
          onClick={() => setBlogOpenIndex(-1)}
        >
          <Image src={"/close.svg"} width={35} height={35} alt={"close blog"} />
          <span className=" text-xl"> Close </span>
        </button>
        <p className="p-4 text-center text-4xl">{blog.title}</p>
        <div className="mx-4 flex flex-col">
          <p className="md:text-md py-0 md:py-1 text-2xl">
            Description:&nbsp;{blog.description}
          </p>
          <p className="md:text-md py-0 md:py-1 text-2xl">
            Author:&nbsp;{blog.author}
          </p>
          <p className="md:text-md pb-4 pt-0 md:pt-1 text-2xl">
            Date Created:&nbsp;{`${dayjs(blog.date).format("MMM D, YYYY")}`}
          </p>
          {blog.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-2xl indent-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
});

export default BlogPage;
