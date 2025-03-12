"use client";

import {
  Carousel as EmblaCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";

type Color = { color?: "primary" | "secondary" };

type Props = {
  withNavigation?: boolean;
  withDots?: boolean;
} & Color;

export const Carousel = ({
  children,
  withNavigation = true,
  withDots = true,
  color,
}: PropsWithChildren<Props>) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [, setCount] = React.useState(0);
  // const [emblaRef, emblaApi] = useEmblaCarousel({ active: true });
  // const { onDotButtonClick, scrollSnaps, selectedIndex } =
  //   useDotButton(emblaApi);

  useEffect(() => {
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

      {withDots && (
        <CarouselDots emblaApi={api} current={current} color={color} />
      )}
      {withNavigation && (
        <>
          <CarouselPrevious className="cursor-pointer hidden md:flex bg-brand text-white border-brand hover:text-brand" />
          <CarouselNext className="cursor-pointer hidden md:flex bg-brand text-white border-brand hover:text-brand" />
        </>
      )}
    </EmblaCarousel>
  );
};

const CarouselDots = ({
  emblaApi,
  current,
  color = "primary",
}: {
  emblaApi: UseEmblaCarouselType["1"] | undefined;
  current: number;
  color?: "primary" | "secondary";
}) => {
  if (!emblaApi) {
    return;
  }

  return (
    <div className="flex gap-2 justify-center mt-4">
      {emblaApi?.scrollSnapList().map((_, index) => {
        const colorPrimary =
          index === current - 1
            ? "border-brand bg-brand"
            : "border-brand bg-white";

        const colorSecondary =
          index === current - 1
            ? "border-white bg-white"
            : "border-white bg-brand";

        const colorDots = color === "primary" ? colorPrimary : colorSecondary;

        return (
          <button
            key={index}
            className={`cursor-pointer size-3 border-1 rounded-full ${colorDots}`}
            onClick={() => {
              emblaApi?.scrollTo(index);
            }}
          />
        );
      })}
    </div>
  );
};
