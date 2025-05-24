import { ReservationSection } from "@/components/ReservationSection";

export const Hero = () => {
  return (
    <div className="w-full bg-[url(/hero.avif)] relative h-full bg-cover min-h-[calc(100vh-64px)] bg-no-repeat bg-center flex items-center justify-center md:justify-end">
      <div className="flex flex-col h-full min-h-[400px] justify-around z-1">
        <HeroHeader />

        <ReservationSection />
      </div>

      {/* Tło z overlayem */}
      <div className="absolute inset-0 bg-[url(/hero.avif)] bg-cover bg-no-repeat bg-center" />
      <div className="absolute inset-0 bg-black/20 bg-opacity-50" />
    </div>
  );
};

export const HeroHeader = () => {
  return (
    <div className=" text-white text-center sm:text-right font-mono font-medium max-w-xl text-balance px-4 sm:px-6">
      <p className="text-4xl sm:text-5xl">Ośrodek Wypoczynkowy</p>
      <p className="text-4xl sm:text-5xl mt-2">Na Wzgórzu</p>
      <p className="text-xl sm:text-2xl">Spokój i relaks w otoczeniu natury,</p>
      <p className="text-xl sm:text-2xl">nad samym jeziorem</p>
    </div>
  );
};
