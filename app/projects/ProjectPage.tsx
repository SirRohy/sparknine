import Navbar from "../components/Navbar";
import { memo } from "react";
import dayjs from "dayjs";
import CarouselComponent from "../components/CarouselComponent";

const ProjectPage = memo(function ProjectPage({
  project,
}: {
  project: {
    index: number;
    name: string;
    coverImage: string;
    pictures: string[];
    description: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    location: string;
    partners: string;
    status: string;
  };
}) {
  return (
    <main>
      <Navbar path="/" />
      <div className="relative bg-background w-screen min-h-[calc(100vh-5rem)] grid grid-cols-2 gap-4 items-top justify-center self-center text-center text-textcolor max-sm:p-2 md:p-6">
        <div
          className={`flex h-max flex-col ${
            project.pictures.length > 0
              ? "col-span-1 max-lg:col-span-2"
              : "col-span-2"
          }`}
        >
          <h1 className="text-6xl">{project.name}</h1>
          {project.partners.length === 0 ? (
            <></>
          ) : (
            <p className="text-2xl">
              <span className="font-bold">In collaboration with:&nbsp;</span>
              {project.partners}
            </p>
          )}
          <p className="text-2xl mt-5">
            <span className="font-bold">Location:</span>&nbsp;{project.location}
          </p>
          <p className="text-2xl mb-5">
            <span className="font-bold">Date and time:</span>&nbsp;
            {project.startDate === project.endDate
              ? `${dayjs(project.startDate).format(
                  "dddd MMM D, YYYY"
                )} @ ${dayjs("2001-01-01" + project.startTime, "HH:mm").format(
                  "h:mma"
                )} - ${dayjs("2001-01-01" + project.endTime, "HH:mm").format(
                  "h:mma"
                )}`
              : `${dayjs(project.startDate).format(
                  "dddd MMM D, YYYY"
                )} @ ${dayjs("2001-01-01" + project.startTime, "HH:mm").format(
                  "h:mma"
                )} - ${dayjs(project.endDate).format(
                  "dddd MMM D, YYYY"
                )} @ ${dayjs("2001-01-01" + project.endTime, "HH:mm").format(
                  "h:mma"
                )}`}
          </p>

          {project.description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-xl text-left indent-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="col-span-1 max-lg:col-span-2">
          {project.pictures.length > 0 ? (
            <div>
              <h2 className="text-6xl pb-4">Gallery</h2>
              <div className="relative max-w-screen max-h-[1000px] bg-secondary">
                <CarouselComponent
                  contents={project.pictures.map((picture, index) => {
                    const imageUrl =
                      `/Projects/${project?.name.replace(/ /g, "-")}/` +
                        picture ?? "/Members/anonymous.png";
                    return (
                      <div key={index} className="">
                        <div className="flex w-full max-h-[1000px] max-w-screen justify-center">
                          <div className="flex flex-col justify-center bg-inherit max-w-screen max-h-screen">
                            <img
                              src={imageUrl}
                              alt={`Slide ${index}`}
                              className="w-full h-[100%] object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  seconds={5}
                  width={"100%"}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
});

export default ProjectPage;
