import { House } from "@/assets/House";
import { Carousel } from "@/components/Carousel";
import { HouseCard } from "@/components/Houses/HouseCard";
import { CarouselItem } from "@/components/ui/carousel";
import { houses } from "@/data/houses";

export function HousesCarousel() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col text-3xl text-gray-700 font-semibold font-mono mx-auto">
        <div>Nasze</div>
        <div className="underline underline-offset-8 decoration-gray-700">
          domki
        </div>
      </div>

      <div className="mx-auto relative">
        <div className="absolute right-0 -top-[185px] -z-1">
          <House />
        </div>

        <Carousel>
          {houses.map((house, index) => (
            <CarouselItem key={index}>
              <HouseCard {...house} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
