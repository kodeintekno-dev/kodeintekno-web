import type { ProjectValue } from "../PaginatedProjects";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";

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
        "group w-full p-5 bg-[#FBFBFB] border border-black/10 rounded-lg flex flex-col gap-2.5 cursor-pointer",
        className,
      )}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-1 items-center">
          <img
            src="/img/icon/picture.svg"
            alt="Picture"
            className="rounded-sm"
          />
          <p className="text-sm font-semibold truncate">
            {idx !== undefined && <>{String(idx + 1).padStart(2, "0")}. </>}
            {project.title === "" ? "???" : project.title}
          </p>
        </div>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/40 hover:text-black transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <div className={clsx("overflow-hidden rounded-md", imageClassName)}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            w-full h-full object-cover object-top
            transition-transform duration-200 ease-in-out
            group-hover:scale-110
          "
        />
      </div>
    </div>
  );
}
