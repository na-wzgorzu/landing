import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="w-full bg-[url(/hero.jpg)] relative h-full bg-cover min-h-[calc(100vh-64px)] bg-no-repeat bg-center flex items-center justify-end">
      <div className="flex flex-col h-full justify-around">
        <div />
        <HeroHeader />

        <ReservationSection />
      </div>
    </div>
  );
};

export const HeroHeader = () => {
  return (
    <div className="text-4xl text-white font-bold max-w-lg text-balance pr-10">
      Wypoczynek w zgodzie z naturą w Ośrodek Wypoczynkowy &apos;Na
      wzgórzu&apos;
    </div>
  );
};

export const ReservationSection = () => {
  return (
    <div className="bg-white min-h-12 flex gap-4 border-white justify-between border w-fit">
      <div className="flex text-xs gap-3">
        <div className="pt-1 pl-1">Przyjazd</div>
        <div className="flex items-end">
          <span className="font-semibold text-3xl mr-1">11</span>Sty
        </div>
      </div>

      <div className="flex text-xs gap-3">
        <div className="pt-1 pl-1">Wyjazd</div>
        <div className="flex items-end">
          <span className="font-semibold text-3xl mr-1">12</span>Sty
        </div>
      </div>

      {/* <div className="border border-solid border-white"> */}
      <Button variant="green" size="lg">
        Rezerwuj
      </Button>
      {/* </div> */}
    </div>
  );
};
