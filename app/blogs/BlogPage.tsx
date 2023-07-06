"use client";

import { memo } from "react";
import dayjs from "dayjs";

const BlogPage = memo(function BlogPage({
  blog,
}: {
  blog: {
    index: number;
    title: string;
    author: string;
    description: string;
    date: string;
    path: string;
  };
}) {
  return (
    
    <div>
      <p className="p-4 text-center sm:text-lg md:text-xl lg:text-2xl">
        {blog.title}
      </p>
      <div className="mx-4 flex flex-col">
        <p className="md:text-md py-0 text-sm md:py-1 lg:text-lg">
          Description:&nbsp;{blog.description}
        </p>
        <p className="md:text-md py-0 text-sm md:py-1 lg:text-lg">
          Author:&nbsp;{blog.author}
        </p>
        <p className="md:text-md pb-4 pt-0 text-sm md:pt-1 lg:text-lg">
          Date Created:&nbsp;{`${dayjs(blog.date).format("MMM D, YYYY")}`}
        </p>
      </div>
    </div>
  );
});

export default BlogPage;
