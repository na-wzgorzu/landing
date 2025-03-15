import { ReservationSection } from "@/components/ReservationSection";

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
