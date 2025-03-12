"use client";

import {
  Carousel as EmblaCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import React, { PropsWithChildren, useState } from "react";

export const Carousel = ({ children }: PropsWithChildren) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [, setCount] = React.useState(0);
  // const [emblaRef, emblaApi] = useEmblaCarousel({ active: true });
  // const { onDotButtonClick, scrollSnaps, selectedIndex } =
  //   useDotButton(emblaApi);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <EmblaCarousel setApi={setApi} className="w-full mx-auto md:max-w-[80vw]">
      <CarouselContent>{children}</CarouselContent>

      <CarouselDots emblaApi={api} current={current} />

      <CarouselPrevious className="hidden md:flex bg-brand text-white border-brand hover:text-brand" />
      <CarouselNext className="hidden md:flex bg-brand text-white border-brand hover:text-brand" />
    </EmblaCarousel>
  );
};

const CarouselDots = ({
  emblaApi,
  current,
}: {
  emblaApi: UseEmblaCarouselType["1"] | undefined;
  current: number;
}) => {
  if (!emblaApi) {
    return;
  }

  return (
    <div className="flex gap-2 justify-center mt-4">
      {emblaApi?.scrollSnapList().map((_, index) => (
        <button
          key={index}
          className={`size-3 border-1 border-brand rounded-full ${
            index === current - 1 ? "bg-brand" : ""
          }`}
          onClick={() => {
            emblaApi?.scrollTo(index);
          }}
        />
      ))}
    </div>
  );
};
