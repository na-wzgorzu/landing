import { Gallery } from "@/components/Gallery";
import { Check } from "lucide-react";

const resortFeatures: string[] = [
  "Cichy, bezpieczny, kameralny i przyjazny rodzinom ośrodek",
  "Lokalizacja w Brodnickim Parku Krajobrazowym",
  "Plac zabaw dla dzieci, pokój zabaw, salę gier i inne atrakcje",
  "Różne opcje zakwaterowania (domki, apartamenty, pokoje)",
  "Pełne wyżywienie z domowymi posiłkami",
  "Dostęp do plaży i możliwość wypożyczenia sprzętu wodnego",
  "Wypożyczalnię rowerów górskich",
  "Boisko do siatkówki, koszykówki, badmintona",
  "Położenie nad jeziorem będącym częścią głównego szlaku wodnego pojezierza",
  "Szlaki turystyczne, ścieżki rowerowe i trasy kajakowe, wszystkie z pięknymi widokami",
  "Ogniska z kiełbaskami",
  "Możliwość przyjazdu ze zwierzętami",
  "Zadbany i zagospodarowany teren, altanki, bujawki, komplet wypoczynkowy, itp.",
];

const images = [
  "/about/oferujemy1.jpg",
  "/about/oferujemy2.jpg",
  "/about/oferujemy3.jpg",
  "/about/oferujemy4.jpg",
  "/about/oferujemy5.jpg",
  "/about/oferujemy6.jpg",
  "/about/oferujemy7.jpg",
  "/about/oferujemy8.jpg",
  "/about/oferujemy09.jpg",
  "/about/oferujemy10.jpg",
  "/about/oferujemy11.jpg",
  "/about/oferujemy12.jpg",
];

export const FeaturesSection = () => {
  const features = [
    {
      title: "Cisza i spokój",
      description:
        "Nasz ośrodek jest kameralny, ma zamknięty teren, gdzie można odpocząć od zgiełku miasta.",
      delay: "0",
    },
    {
      title: "Bliskość natury",
      description:
        "Otaczają nas rezerwaty przyrody, jeziora, lasy i malownicze krajobrazy.",
      delay: "200",
    },
    {
      title: "Zakwaterowanie",
      description:
        "W domkach różnego typu (każdy z własnym, wydzielonym ogródkiem) oraz pokojach w budynku głównym.",
      delay: "400",
    },
    {
      title: "Infrastruktura rekreacyjna",
      description:
        "Plaża, marina, wypożyczalnie, boiska, plac zabaw i sala gier.",
      delay: "600",
    },
    {
      title: "Pyszne, domowe jedzenie",
      description:
        "Serwujemy pełne wyżywienie, także w wersjach wegetariańskich, wegańskich i bezglutenowych.",
      delay: "800",
    },
    {
      title: "Akceptujemy zwierzęta",
      description: "Możecie Państwo przyjechać do nas ze swoimi pupilami.",
      delay: "1000",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-resort-beige">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4 px-4">
          <div className="mx-auto w-16 h-[2px] bg-resort-green  fade-in"></div>
          <h2 className="text-3xl sm:text-4xl font-medium text-resort-text  fade-in animation-delay-200">
            Dlaczego warto nas wybrać?
          </h2>
          <p className="text-resort-text/80  fade-in animation-delay-400">
            Na Wzgórzu oferuje wyjątkowe połączenie piękna natury, komfortu i
            przemyślanej infrastruktury, które wyróżnia nas jako najlepszy
            nadjeziory ośrodek wypoczynkowy w regionie.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${parseInt(feature.delay) + 600}ms` }}
            >
              <div className="flex items-start">
                <div className="rounded-full bg-resort-green/10 p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-resort-green" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-resort-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-resort-text/70">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional benefits list */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm fade-in animation-delay-800">
          <h3 className="text-lg font-medium text-resort-text mb-6">
            Co oferujemy
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {resortFeatures.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-brand mt-2" />
                <div className="text-gray-700 w-full">{feature}</div>
              </li>
            ))}
          </ul>

          <Gallery images={images} />
        </div>
      </div>
    </section>
  );
};
