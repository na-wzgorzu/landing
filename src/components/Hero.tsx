import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="w-full bg-[url(/hero.jpg)] relative h-full bg-cover min-h-[calc(100vh-64px)] bg-no-repeat bg-center flex items-center justify-center md:justify-end">
      <div className="flex flex-col h-full min-h-[400px] justify-around z-1">
        <div />

        <HeroHeader />

        <ReservationSection />
      </div>

      {/* Tło z overlayem */}
      <div className="absolute inset-0 bg-[url(/hero.jpg)] bg-cover bg-no-repeat bg-center" />
      <div className="absolute inset-0 bg-black/20 bg-opacity-50" />
    </div>
  );
};

export const HeroHeader = () => {
  return (
    <div className="text-3xl sm:text-4xl text-white text-center sm:text-left font-mono font-medium max-w-lg text-balance px-4 sm:pr-10">
      Wypoczynek w zgodzie z naturą w Ośrodek Wypoczynkowy &apos;Na
      wzgórzu&apos;
    </div>
  );
};

export const ReservationSection = () => {
  return (
    <div className="bg-white min-h-12 gap-4 border-white justify-between border w-fit hidden sm:flex">
      <div className="flex text-sm font-light gap-3">
        <div className="pt-1 pl-1">Przyjazd</div>
        <div className="flex items-end">
          <span className="font-normal text-4xl mr-1">11</span>Sty
        </div>
      </div>

      <div className="flex text-sm font-light gap-3">
        <div className="pt-1 pl-1">Wyjazd</div>
        <div className="flex items-end">
          <span className="font-normal text-4xl mr-1">12</span>Sty
        </div>
      </div>

      <Button variant="green" size="lg">
        Rezerwuj
      </Button>
    </div>
  );
};
