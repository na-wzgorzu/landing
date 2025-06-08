import { About } from "@/components/About";
import { FoodService } from "@/components/FoodService";
import { GoogleMap } from "@/components/GoogleMap";
import { Hero } from "@/components/Hero";
import { ApartmentsCarousel } from "@/components/Houses/ApartmentsCarousel";
import { HousesCarousel } from "@/components/Houses/HousesCarousel";
import { Reviews } from "@/components/Reviews";
import { Title } from "@/components/Title";
import { VerticalDivider } from "@/components/VerticalDivider";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col gap-10 overflow-hidden">
      <Hero />
      <VerticalDivider color={"black"} />
      <About />
      <VerticalDivider color={"black"} />
      <div className=" flex flex-col">
        <HousesCarousel />
        <ApartmentsCarousel />
      </div>
      <VerticalDivider color={"black"} />
      <FoodService />
      <FoodService isTest />
      <VerticalDivider color={"black"} />
      <Services />
      <VerticalDivider color={"black"} />
      <GoogleMap />
      <VerticalDivider color={"black"} />
      <Reviews />
      <VerticalDivider color={"black"} />
      <div />
    </div>
  );
}

const freeServices = [
  "bezpłatny parking",
  "boiska do siatkówki, koszykówki i badmintona",
  "plażę",
  "mini marinę z wypożyczalnią: łódek, kajaków i rowerów wodnych",
  "wypożyczalnię rowerów górskich",
  "pokój zabaw dla dzieci",
  "salę gier (bilard, tenis stołowy, piłkarzyki)",
  "atrakcje dla dzieci (piaskownica, huśtawki, karuzele, itp.)",
  "wiatę grillową",
  "miejsce na ognisko - w okresie wakacyjnym raz w tygodniu organizujemy ognisko dla gości z kiełbaskami i dodatkami",
  "internet wi-fi (na ograniczonym obszarze)",
  "bibliotekę",
  "altanki, bujawki, zagospodarowany teren",
];

export const Services = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-lg gap-6 text-gray-700 px-4">
      <Title title="Oferujemy" />

      <p className="sm:text-lg font-medium">
        W ramach pobytu, oprócz noclegu, wyżywienia oraz możliwości wypoczynku w
        ciszy i spokoju, oferujemy Państwu również:
      </p>

      <ul className="space-y-2">
        {freeServices.map((option, index) => (
          <li key={index} className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-brand mt-2" />
            <div className="text-gray-700 w-full">{option}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
