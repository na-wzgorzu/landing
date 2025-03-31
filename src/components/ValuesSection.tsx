import { Leaf, Users, UtensilsCrossed, Bike } from "lucide-react";

export const ValuesSection = () => {
  const values = [
    {
      icon: <Leaf className="h-7 w-7 text-resort-green" />,
      title: "Bliskość natury",
      description:
        "Szanujemy otaczające nas środowisko i dbamy o to, by nasi goście mogli cieszyć się jego pięknem.",
    },
    {
      icon: <Users className="h-7 w-7 text-resort-green" />,
      title: "Rodzinny klimat",
      description:
        "Tworzymy miejsce, gdzie rodziny mogą spędzać czas razem, budując wspólne wspomnienia.",
    },
    {
      icon: <UtensilsCrossed className="h-7 w-7 text-resort-green" />,
      title: "Tradycja i jakość",
      description:
        "Nasza kuchnia bazuje na świeżych produktach i domowych recepturach, by zapewnić najlepsze doznania kulinarne.",
    },
    {
      icon: <Bike className="h-7 w-7 text-resort-green" />,
      title: "Aktywny wypoczynek",
      description:
        "Oferujemy wiele atrakcji, od sportów wodnych po gry zespołowe i wycieczki rowerowe.",
    },
  ];

  return (
    <section id="values" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
          alt="Nature background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="section-container relative z-1 p-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="mx-auto w-16 h-[2px] bg-brand fade-in"></div>
          <h2 className="text-3xl sm:text-4xl font-medium fade-in animation-delay-200">
            Nasze wartości
          </h2>
          <p className="text-resort-text/80  fade-in animation-delay-400">
            Te podstawowe zasady kierują wszystkim, co robimy w Na Wzgórzu, od
            projektowania naszych przestrzeni po sposób interakcji z gośćmi i
            środowiskiem.
          </p>
        </div>

        {/* Values cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card  fade-in"
              style={{ animationDelay: `${index * 200 + 600}ms` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        {/* <div className="mt-16 text-center max-w-3xl mx-auto  fade-in animation-delay-800">
          <blockquote className="text-xl italic font-serif text-resort-text/80">
            W Na Wzgórzu nie oferujemy tylko zakwaterowania; tworzymy
            doświadczenia, które łączą Cię z naturą, rodziną i prostą radością
            przebywania w pięknym miejscu.
          </blockquote>
          <p className="mt-4 font-medium text-resort-text">
            — Rodzina Kowalskich, Założyciele
          </p>
        </div> */}
      </div>
    </section>
  );
};
