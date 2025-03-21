import { Check } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Cisza i spokój",
      description:
        "Nasz ośrodek to zamknięty teren, gdzie można odpocząć od zgiełku miasta.",
      delay: "0",
    },
    {
      title: "Bliskość natury",
      description:
        "Otaczają nas rezerwaty przyrody, lasy i malownicze krajobrazy.",
      delay: "200",
    },
    {
      title: "Komfortowe zakwaterowanie",
      description:
        "Domki, apartamenty z ogródkiem oraz pokoje w budynku głównym.",
      delay: "400",
    },
    {
      title: "Bogata infrastruktura rekreacyjna",
      description: "Plaża, marina, boiska sportowe, plac zabaw i sala gier.",
      delay: "600",
    },
    {
      title: "Pyszne, domowe jedzenie",
      description:
        "Serwujemy pełne wyżywienie, także w wersjach wegetariańskich, wegańskich i bezglutenowych.",
      delay: "800",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-resort-beige">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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
              className="feature-card "
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
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm  fade-in animation-delay-800">
          <h3 className="text-lg font-medium text-resort-text mb-6">
            Co oferujemy
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 stylized-list">
            <li>Cichy, bezpieczny i przyjazny rodzinom ośrodek</li>
            <li>
              Położenie w Brodnickim Parku Krajobrazowym, otoczonym przyrodą
            </li>
            <li>Komfortowe zakwaterowanie (domki, apartamenty, pokoje)</li>
            <li>Pełne wyżywienie z domowymi posiłkami</li>
            <li>Dostęp do prywatnej plaży z wygodnymi leżakami</li>
            <li>Marina z wypożyczalnią łodzi i kajaków</li>
            <li>Boiska sportowe do tenisa, siatkówki i koszykówki</li>
            <li>
              Plac zabaw dla dzieci z nowoczesnym, bezpiecznym wyposażeniem
            </li>
            <li>
              Szlaki turystyczne i ścieżki rowerowe z malowniczymi widokami
            </li>
            <li>Sezonowe wycieczki z przewodnikiem i zajęcia przyrodnicze</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
