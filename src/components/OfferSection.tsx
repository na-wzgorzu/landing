import { Title } from "@/components/Title";

const freeServices = [
  "bezpłatny parking",
  "plażę",
  "mini marinę z wypożyczalnią: łódek, kajaków i rowerów wodnych",
  "wypożyczalnię rowerów górskich",
  "boiska (siatkówka, koszykówka i badminton oraz małe bramki do piłki nożnej)",
  "pokój zabaw dla dzieci",
  "salę gier (bilard, tenis stołowy, piłkarzyki)",
  "atrakcje dla dzieci (piaskownica, huśtawki, karuzele, itp.)",
  "wiatę grillową",
  "miejsce na ognisko - w okresie wakacyjnym raz w tygodniu organizujemy dla gości ognisko z kiełbaskami i dodatkami",
  "internet Wi-Fi (nie obejmuje całej powierzchni ośrodka)",
  "bibliotekę",
  "altanki, bujawki, komplet wypoczynkowy",
  "zagospodarowany i zadbany teren ośrodka",
  "możliwość przyjazdu ze zwierzętami",
];

export const OfferSection = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-lg gap-6 text-gray-700 px-4">
      <Title title="Oferujemy" />

      <p className="sm:text-lg font-medium">
        W ramach pobytu, oprócz noclegu, wyżywienia oraz możliwości wypoczynku w
        ciszy i spokoju oferujemy Państwu również:
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
