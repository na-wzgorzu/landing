import { Button } from "@/components/ui/button";

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
