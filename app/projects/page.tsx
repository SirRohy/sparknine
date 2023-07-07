import Navbar from "../components/Navbar";
import ProjectIcon from "./ProjectIcon";
import projects from "./Projects";


export default function Home() {
  return (
    <main>
      <Navbar path="/projects" />
      <div className="relative bg-background flex h-max flex-col items-center justify-center self-center text-center text-textcolor p-6">
        <div className="w-full text-center border-b-[5px] border-bordercolor mb-2 pb-2 text-4xl">
          Upcoming Projects
        </div>
        <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-stretch w-full gap-6">
          {projects.map(
            (project, idx) =>
              project.status === "upcoming" && (
                <ProjectIcon key={idx} index={project.index} />
              )
          )}
        </div>
        <div className="w-full text-center border-b-[5px] border-bordercolor mb-2 mt-6 pb-2 text-4xl">
          Previous Projects
        </div>
        <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-stretch w-full gap-6">
          {projects.map(
            (project, idx) =>
              project.status === "finished" && (
                <ProjectIcon key={idx} index={project.index} />
              )
          )}
        </div>
      </div>
    </main>
  );
}
