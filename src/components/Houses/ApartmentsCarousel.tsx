import { House } from "@/assets/House";
import { Carousel } from "@/components/Carousel";
import { HouseCard } from "@/components/Houses/HouseCard";
import { CarouselItem } from "@/components/ui/carousel";
import { rooms } from "@/data/houses";

export function ApartmentsCarousel() {
  return (
    <div className="flex flex-col gap-6 md:mt-20">
      <div className="md:mx-auto relative px-4">
        <div className="absolute right-0 -top-[185px] -z-1">
          <House />
        </div>

        <Carousel>
          {rooms.map((house, index) => (
            <CarouselItem key={index}>
              <HouseCard {...house} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
