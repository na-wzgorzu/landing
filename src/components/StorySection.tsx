import { MoveRight } from "lucide-react";

export const StorySection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Image */}
        <div className=" fade-in">
          <img
            src="/about/domek.jpg"
            alt="Rzeka pomiędzy górami w Brodnickim Parku Krajobrazowym"
            className="w-full h-[400px] sm:h-[500px] object-cover rounded-xl"
            loading="lazy"
          />
        </div>
        {/* Right column: Story content */}
        <div className="space-y-6">
          <div className="heading-with-line  fade-in">
            <h2 className="text-lg text-resort-green font-medium uppercase tracking-wider">
              Nasza historia
            </h2>
          </div>

          <h3 className="text-3xl sm:text-4xl font-medium text-resort-text  fade-in animation-delay-200">
            Rodzinny wypoczynek w otoczeniu przyrody
          </h3>

          <div className="space-y-4  fade-in animation-delay-400">
            <p className="text-resort-text/80 leading-relaxed">
              Ośrodek Wypoczynkowy Na Wzgórzu to miejsce stworzone dla osób
              szukających spokoju, bliskości natury i wypoczynku w domowej
              atmosferze. Obiekt jest kameralny, położony na terenie
              malowniczego Brodnickiego Parku Krajobrazowego, w otoczeniu
              rezerwatów przyrody, nad urokliwym Jeziorem Strażym. Idealnie
              nadaje się na relaks z dala od miejskiego zgiełku oraz natłoku
              turystów.
            </p>
            <p className="text-resort-text/80 leading-relaxed">
              Naszymi klientami są głównie rodziny z dziećmi oraz dziadkowie z
              wnukami. Teren obiektu jest ogrodzony i bezpieczny. Nie
              przyjmujemy kolonii, a w okresie wakacyjnym również innych grup
              zorganizowanych, nie ma tu wesel ani imprez, jest za to cicho.
            </p>
          </div>

          <div className="fade-in animation-delay-600 inline-flex items-center text-resort-green hover:underline font-medium">
            Poznaj nasze wartości <MoveRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
};
