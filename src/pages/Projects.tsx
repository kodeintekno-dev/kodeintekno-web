import RecentProject from "@/components/RecentProject";
import { Helmet } from "react-helmet-async";
import PaginatedProjects from "@/components/PaginatedProjects";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Portofolio Proyek – Kodeintekno</title>
        <meta
          name="description"
          content="Halaman ini menampilkan portofolio proyek Kodeintekno berupa pengembangan website dan aplikasi sebagai solusi digital untuk kebutuhan bisnis dan organisasi."
        />
      </Helmet>
      <RecentProject />
      <PaginatedProjects projectsPerPage={6} />
    </>
  );
}
