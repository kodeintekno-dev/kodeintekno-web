import type { ProjectValue } from "../PaginatedProjects";
import clsx from "clsx";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

type ProjectCardProps = {
  project: ProjectValue;
  idx?: number;
  imageClassName?: string;
  className?: string;
};

export default function ProjectCard({
  project,
  idx,
  imageClassName = "w-full aspect-video",
  className,
}: ProjectCardProps) {
  return (
    <div
      className={clsx(
        "group w-full p-5 bg-[#FBFBFB] border border-black/10 rounded-lg flex flex-col gap-2.5",
        className,
      )}
    >
      <div className="flex justify-between items-center w-full">
        <Link
          to={`/projects/${project.slug}`}
          className="flex gap-1 items-center hover:opacity-70 transition-opacity flex-1 overflow-hidden"
        >
          <img
            src="/img/icon/picture.svg"
            alt="Picture"
            className="rounded-sm"
          />
          <p className="text-sm font-semibold truncate leading-tight">
            {idx !== undefined && <>{String(idx + 1).padStart(2, "0")}. </>}
            {project.title === "" ? "???" : project.title}
          </p>
        </Link>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/40 hover:text-black transition-colors"
            title="Kunjungi Live Demo"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className={clsx("overflow-hidden rounded-md block relative", imageClassName)}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            w-full h-full object-cover object-top
            transition-transform duration-500 ease-in-out
            group-hover:scale-110
          "
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-white font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-sm">Lihat Detail</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </Link>
    </div>
  );
}
