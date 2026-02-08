import { projects } from "@/data/project";
import type { ProjectValue } from "../PaginatedProjects";
import { useState } from "react";

export default function ProjectCard({
  project,
  idx,
}: {
  project: ProjectValue;
  idx: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={idx}
      className="w-full p-5 bg-[#FBFBFB] border border-black/10 rounded-lg flex flex-col gap-2.5 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-sm font-semibold">
        {String(projects.indexOf(project) + 1).padStart(2, "0")}.
        {[project.title]}
      </span>
      <div className="w-full h-60 overflow-hidden">
        <img
          src={project.thumbnail}
          alt=""
          className="w-full h-full object-cover"
          style={{
            scale: isHovered ? 1.2 : 1.3,
            transition: "all ease-in-out 100ms"
          }}
        />
      </div>
    </div>
  );
}
