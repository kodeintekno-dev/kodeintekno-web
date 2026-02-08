import RecentProject from "@/components/RecentProject";
import { Helmet } from "react-helmet-async";
import PaginatedProjects from "@/components/PaginatedProjects";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Kodeintekno</title>
        <meta name="description" content="Welcome to kodeintekno" />
      </Helmet>
      <RecentProject />
      <PaginatedProjects projectsPerPage={6}/>
    </>
  );
}
