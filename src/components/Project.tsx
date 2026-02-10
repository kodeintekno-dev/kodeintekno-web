import { projects } from "@/data/project";
import Section from "./ui/section";
import { Button } from "./ui/button";
import { Link } from "react-router";
import ProjectCard from "./ui/projectCard";

export default function Project() {
  return (
    <Section className="p-5 py-8 sm:px-8 lg:p-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-semibold text-3xl lg:text-6xl">Project</h1>
        <p className="max-w-[50ch] mx-auto lg:text-lg text-black/60">
          Kami mengembangkan website dan sistem yang modern, efisien dan
          berkomitmen memberikan hasil yang profesional, fungsional, dan sesuai
          dengan kebutuhan klien.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.slice(0, 3).map((project, i) => (
          <ProjectCard
            project={project}
            idx={i}
            imageClassName="w-full h-[180px]"
          />
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <Button asChild variant="outline" size="cta">
          <Link to="/projects">Lihat Semua</Link>
        </Button>
      </div>
    </Section>
  );
}
