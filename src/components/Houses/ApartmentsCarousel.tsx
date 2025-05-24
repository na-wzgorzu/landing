import { House } from "@/assets/House";
import { Carousel } from "@/components/Carousel";
import { HouseCard } from "@/components/Houses/HouseCard";
import { CarouselItem } from "@/components/ui/carousel";
import { accommodationList } from "@/data/houses";

export function ApartmentsCarousel() {
  return (
    <div className="flex flex-col gap-6 md:mt-20">
      <div className="md:mx-auto relative px-4">
        <div className="absolute right-0 -top-[185px] -z-1">
          <House />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-brand">
          Pokoje
        </h2>

        <Carousel>
          {accommodationList
            .filter((h) => h.type === "pokoj")
            .map((house, index) => (
              <CarouselItem key={index}>
                <HouseCard {...house} />
              </CarouselItem>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
