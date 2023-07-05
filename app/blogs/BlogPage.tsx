"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectIcon from "./BlogIcon";
import projects from "./Blogs";
import { memo, useState } from "react";

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
  }
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <></>
  );
});

export default BlogPage;