import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full bg-[url(/hero.avif)] relative h-full bg-cover min-h-[calc(100vh-64px)] bg-no-repeat bg-center flex justify-center md:justify-end">
      <div className="flex flex-col h-full min-h-[400px] gap-6 z-1 mt-20">
        <HeroHeader />

        <div className="flex flex-col items-center sm:items-end md:justify-end md:flex-row gap-2 w-full px-6">
          <Link
            href="/cennik"
            className="border border-white w-full sm:w-1/2 lg:w-1/3"
          >
            <Button variant="green" size="lg" className="w-full">
              Cennik
            </Button>
          </Link>

          <Link
            href="/rezerwacja"
            className="border border-white w-full sm:w-1/2 lg:w-1/3"
          >
            <Button variant="green" size="lg" className="w-full">
              Rezerwuj
            </Button>
          </Link>
        </div>
      </div>

      {/* Tło z overlayem */}
      <div className="absolute inset-0 bg-[url(/hero.avif)] bg-cover bg-no-repeat bg-center" />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export const HeroHeader = () => {
  return (
    <div className=" text-white text-center sm:text-right font-mono font-medium max-w-5xl text-balance px-4 sm:px-6">
      <p className="text-5xl sm:text-6xl">Ośrodek Wypoczynkowy</p>
      <p className="text-5xl sm:text-6xl mt-2">Na Wzgórzu</p>
      <p className="text-2xl sm:text-3xl">
        Spokój i relaks w otoczeniu natury,
      </p>
      <p className="text-2xl sm:text-3xl">nad samym jeziorem</p>
    </div>
  );
};
