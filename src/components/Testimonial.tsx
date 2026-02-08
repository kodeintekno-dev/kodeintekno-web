import { testimonials } from "@/data/testimonial";
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
import Section from "./ui/section";

export default function Testimonial() {
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
    <Section className="p-5 py-8 sm:px-8 lg:p-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-semibold text-3xl lg:text-6xl">Testimonial</h1>
        <p className="lg:text-xl max-w-[50ch] mx-auto text-black/60">
          Kami telah melayani berbagai client dengan profesional, efisien dan teratur hingga mereka selalu puas dengan layanan kami.
        </p>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 2 },
            "(min-width: 1024px)": { slidesToScroll: 3 },
            "(min-width: 1280px)": { slidesToScroll: 4 },
          },
        }}
        className="space-y-8"
      >
        <CarouselContent className="-ml-8">
          {testimonials.map((testimonial, i) => (
            <CarouselItem
              key={i}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-8 space-y-2.5"
            >
              <div className="p-5 rounded-lg space-y-5 text-black/60">
                <div className="flex gap-0.5 p-1.5 bg-orange-500/25 border border-orange-500 rounded-lg w-fit">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      src={
                        "/img/icon/star" +
                        (testimonial.rate >= i + 1
                          ? "-full.svg"
                          : testimonial.rate >= i + 0.5
                            ? "-half.svg"
                            : ".svg")
                      }
                      alt=""
                    />
                  ))}
                </div>
                <p>{testimonial.desc}</p>
                <p className="font-semibold text-xl">~ {testimonial.author}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="grid items-center justify-center gap-4 [grid-template-areas:'l_l'_'p_n'] sm:[grid-template-areas:'p_l_n']">
          <CarouselPrevious size={"icon"} className="[grid-area:p]" />
          <div className="flex gap-2 [grid-area:l]">
            {Array.from({ length: count }).map((_, i) => (
              <div
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
    </Section>
  );
}
