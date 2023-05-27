import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import projects from "./Blogs.json";

const ProjectIcon = memo(function ProjectIcon({ index }: { index: number }) {
  const project = projects.find((project) => project.index === index)
  return (
    <Link
      href={`/projects/${project?.name.replace(/ /g, "-")}`}
      className=""
    >
      <div className="flex flex-col items-center">
        <Image
          src="/nature.jpg"
          alt="Image description"
          className="rounded-sm"
          width={700}
          height={-1}
        />
        <div>
          <p className="text-3xl font-bold">{project?.name} </p>
        </div>
      </div>
      
    </Link>
  );
});

export default ProjectIcon;
