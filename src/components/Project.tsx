import { projects } from "@/data/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Project() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    function handleResize() {
      if (!api) return;

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [api]);

  return (
    <section className="p-5 py-8 sm:px-8 lg:p-16 bg-white border border-black/10 rounded-lg space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-semibold text-3xl lg:text-6xl">Project</h1>
        <p className="max-w-[50ch] mx-auto lg:text-lg text-black/60">
          Kami mengembangkan website dan sistem yang modern, efisien dan
          berkomitmen memberikan hasil yang profesional, fungsional, dan sesuai
          dengan kebutuhan klien.
        </p>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          breakpoints: {
            "(min-width: 1024px)": { slidesToScroll: 2 },
            "(min-width: 1280px)": { slidesToScroll: 3 },
          },
        }}
        className="space-y-8"
      >
        <CarouselContent className="-ml-8">
          {projects.map((project, i) => (
            <CarouselItem
              key={i}
              className="lg:basis-1/2 xl:basis-1/3 pl-8 space-y-2.5"
            >
              <div className="px-5 py-3 bg-gray-50 border border-black/10 rounded-lg space-y-2.5">
                <div className="flex gap-1">
                  <img
                    src="/img/icon/picture.svg"
                    alt="Picture"
                    className="rounded-sm"
                  />
                  <p className="font-semibold">
                    {(i + 1).toString().padStart(2, "0")}.{" "}
                    {project == "" ? "???" : project}
                  </p>
                </div>
                <img
                  src={
                    project == ""
                      ? "/img/placeholder.png"
                      : "/img/project/" + project.toLowerCase() + ".png"
                  }
                  alt={project}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="grid items-center justify-center gap-4 [grid-template-areas:'l_l'_'p_n'] sm:[grid-template-areas:'p_l_n']">
          <CarouselPrevious size={"icon"} className="[grid-area:p]" />
          <div className="flex gap-2 [grid-area:l]">
            {Array.from({ length: count }).map((_, i) => (
              <div
              key={i}
                className={twMerge(
                  "w-2 sm:w-3 h-1 sm:h-2 rounded-lg transition-colors cursor-pointer",
                  i + 1 == current ? "bg-black" : "bg-gray-300",
                )}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
          <CarouselNext className="[grid-area:n] justify-self-end" />
        </div>
      </Carousel>
    </section>
  );
}
