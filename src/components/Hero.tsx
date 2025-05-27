import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full bg-[url(/hero.avif)] relative h-full bg-cover min-h-[calc(100vh-64px)] bg-no-repeat bg-center flex justify-center md:justify-end">
      <div className="flex flex-col h-full min-h-[400px] gap-6 z-1 mt-20">
        <HeroHeader />

        <Link
          href="/rezerwacja"
          className="border border-white w-10/12 sm:w-1/2 md:w-1/3 ml-auto md:mr-6 mx-auto"
        >
          <Button variant="green" size="lg" className="w-full">
            Rezerwuj
          </Button>
        </Link>
      </div>

      {/* Tło z overlayem */}
      <div className="absolute inset-0 bg-[url(/hero.avif)] bg-cover bg-no-repeat bg-center" />
      <div className="absolute inset-0 bg-black/20 bg-opacity-50" />
    </div>
  );
};

export const HeroHeader = () => {
  return (
    <div className=" text-gray-900 text-center sm:text-right font-mono font-medium max-w-5xl text-balance px-4 sm:px-6">
      <p className="text-5xl sm:text-6xl">Ośrodek Wypoczynkowy</p>
      <p className="text-5xl sm:text-6xl mt-2">Na Wzgórzu</p>
      <p className="text-2xl sm:text-3xl">
        Spokój i relaks w otoczeniu natury,
      </p>
      <p className="text-2xl sm:text-3xl">nad samym jeziorem</p>
    </div>
  );
};
