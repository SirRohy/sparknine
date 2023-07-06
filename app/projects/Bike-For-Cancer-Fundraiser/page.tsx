import projects, { fallbackProject } from "../Projects";
import ProjectPage from "../ProjectPage";

export default function Home() {
  return (
    <main>
      <ProjectPage project={projects.find(obj => obj.name === "Bike For Cancer Fundraiser") ?? fallbackProject} />
    </main>
  );
}

