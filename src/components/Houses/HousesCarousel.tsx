import { House } from "@/assets/House";
import { Carousel } from "@/components/Carousel";
import { HouseCard } from "@/components/Houses/HouseCard";
import { CarouselItem } from "@/components/ui/carousel";
import { accommodationList } from "@/data/houses";

export function HousesCarousel() {
  return (
    <div className="flex flex-col  gap-4 sm:gap-8">
      <div className="flex flex-col text-3xl text-gray-700 font-semibold font-mono mx-auto">
        <div>Baza</div>
        <div className="underline underline-offset-8 decoration-gray-700">
          noclegowa
        </div>
      </div>

      <div className="md:mx-auto relative px-4">
        <div className="absolute right-0 -top-[185px] -z-1">
          <House />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-brand">
          Domki
        </h2>

        <Carousel>
          {accommodationList
            .filter((h) => h.type === "domek")
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
