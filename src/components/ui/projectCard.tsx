import type { ProjectValue } from "../PaginatedProjects";
import clsx from "clsx";

type ProjectCardProps = {
  project: ProjectValue;
  idx?: number;
  imageClassName?: string;
  className?: string;
};

export default function ProjectCard({
  project,
  idx,
  imageClassName = "w-full h-60",
  className,
}: ProjectCardProps) {
  return (
    <div
      className={clsx(
        "group w-full p-5 bg-[#FBFBFB] border border-black/10 rounded-lg flex flex-col gap-2.5 cursor-pointer",
        className,
      )}
    >
      <div className="flex gap-1 items-center">
        <img src="/img/icon/picture.svg" alt="Picture" className="rounded-sm" />
        <p className="text-sm font-semibold">
          {idx !== undefined && <>{String(idx + 1).padStart(2, "0")}. </>}
          {project.title === "" ? "???" : project.title}
        </p>
      </div>

      <div className={clsx("overflow-hidden rounded-md", imageClassName)}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            w-full h-full object-cover
            transition-transform duration-200 ease-in-out
            group-hover:scale-110
          "
        />
      </div>
    </div>
  );
}
