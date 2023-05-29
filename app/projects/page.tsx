import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectIcon from "./ProjectIcon";
import projects from "./Projects.json";

export default function Home() {
  return (
    <main>
      <Navbar path="/projects" />
      <div className="relative bg-background flex h-max flex-col items-center justify-center self-center text-center text-textcolor p-6">
        <div className="w-full text-left border-b pb-1 text-xl">
          Upcoming Projects
        </div>
        <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-stretch w-full gap-6">
          {projects.map(
            (project) =>
              project.status === "upcoming" && (
                <ProjectIcon index={project.index} />
              )
          )}
        </div>
        <div className="w-full text-left border-b pb-1 text-xl">
          Previous Projects
        </div>
        <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-stretch w-full gap-6">
          {projects.map(
            (project) =>
              project.status === "finished" && (
                <ProjectIcon index={project.index} />
              )
          )}
        </div>
      </div>
    </main>
  );
}
