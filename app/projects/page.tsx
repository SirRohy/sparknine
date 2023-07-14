import dayjs from "dayjs";
import Navbar from "../components/Navbar";
import ProjectIcon from "./ProjectIcon";
import projects from "./Projects";

export default function Home() {
  return (
    <main>
      <Navbar path="/projects" />
      <div className="relative bg-background flex h-max flex-col items-center justify-center self-center text-center text-textcolor p-6 max-sm:p-0">
        <div className="w-full text-center border-b-[5px] border-bordercolor mb-2 pb-2 text-4xl 2xl:text-6xl 2xl:pb-4">
          Upcoming Projects
        </div>
        <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-stretch w-full gap-6">
          {projects
            .filter((project) =>
              dayjs(project.endDate + project.endTime).isAfter(dayjs())
            )
            .map((project, idx) => (
              <ProjectIcon key={idx} index={project.index} />
            ))}
        </div>
        <div className="w-full text-center border-b-[5px] border-bordercolor mb-2 mt-6 pb-2 text-4xl 2xl:text-6xl 2xl:pb-4">
          Previous Projects
        </div>
        <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-stretch w-full gap-6">
          {projects
            .filter(
              (project) =>
                !dayjs(project.endDate + project.endTime).isAfter(dayjs())
            )
            .map((project, idx) => (
              <ProjectIcon key={idx} index={project.index} />
            ))}
        </div>
      </div>
    </main>
  );
}
