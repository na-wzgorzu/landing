"use client";

import {
  Carousel as EmblaCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { PropsWithChildren } from "react";

export const Carousel = ({ children }: PropsWithChildren) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  console.log("🚀 :12 emblaApi:", emblaApi);
  return (
    <EmblaCarousel ref={emblaRef} className="w-fit mx-auto max-w-6xl">
      <CarouselContent>{children}</CarouselContent>

      <CarouselPrevious className="bg-brand text-white border-brand hover:text-brand" />
      <CarouselNext className="bg-brand text-white border-brand hover:text-brand" />
    </EmblaCarousel>
  );
};
