import { useState } from "react";
import Section from "./ui/section";
import ReactPaginate from "react-paginate";
import ProjectCard from "./ui/projectCard";
import { projects } from "@/data/project";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type PageClickEvent = {
  selected: number;
};

export type ProjectValue = {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
};

function Projects({ currentProjects }: { currentProjects: ProjectValue[] }) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {currentProjects &&
        currentProjects.map((project, idx) => (
          <ProjectCard project={project} idx={idx} />
        ))}
    </div>
  );
}

export default function PaginatedProjects({
  projectsPerPage,
}: {
  projectsPerPage: number;
}) {
  const [projectOffset, setProjectOffset] = useState(0);

  const endOffset = projectOffset + projectsPerPage;
  const currentItems = projects.slice(projectOffset, endOffset);
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const handlePageClick = (event: PageClickEvent) => {
    const newOffset = (event.selected * projectsPerPage) % projects.length;
    setProjectOffset(newOffset);
  };

  return (
    <Section className="w-full px-17.5 py-16 flex flex-col">
      <Projects currentProjects={currentItems} />
      <div className="w-full grid place-items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <Button
              variant="outline"
              className="grid place-items-center w-12 h-12"
            >
              <ArrowRight />
            </Button>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <Button
              variant="outline"
              className="grid place-items-center w-12 h-12"
            >
              <ArrowLeft />
            </Button>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex gap-2 mt-8 items-center"
          previousClassName="paginate-btn mr-2"
          nextClassName="paginate-btn ml-2"
          disabledClassName="paginate-disabled"
          pageLabelBuilder={() => <div className="dot-indicator" />}
          pageClassName="dot"
          activeClassName="dot-active"
        />
      </div>
    </Section>
  );
}
