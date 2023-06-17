import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import projects from "./Projects";

const ProjectIcon = memo(function ProjectIcon({ index }: { index: number }) {
  const project = projects.find((project) => project.index === index);
  return (
    <Link href={`/projects/${project?.name.replace(/ /g, "-")}`} className="">
      <div className="flex flex-col items-center">
        <Image
          src={`${project?.coverImage}`}
          alt="Image description"
          className="rounded-sm aspect-video"
          width={700}
          height={-1}
        />
        <div>
          <p className="text-3xl font-bold">{project?.name} </p>
          <p className="text-xl">Date: {project?.startDate}</p>
        </div>
      </div>
    </Link>
  );
});

export default ProjectIcon;
