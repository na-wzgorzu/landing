import { MoveRight } from "lucide-react";

export const StorySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Image */}
        <div className=" fade-in">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
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
            Rodzinny wypoczynek w otoczeniu natury
          </h3>

          <div className="space-y-4  fade-in animation-delay-400">
            <p className="text-resort-text/80 leading-relaxed">
              Ośrodek Wypoczynkowy Na Wzgórzu to miejsce stworzone z myślą o
              rodzinach, które szukają spokoju, bliskości natury i komfortowego
              wypoczynku. Położony na terenie malowniczego Brodnickiego Parku
              Krajobrazowego, nad czystym i urokliwym Jezioro Strażym, stanowi
              idealne miejsce na relaks z dala od miejskiego zgiełku.
            </p>
            <p className="text-resort-text/80 leading-relaxed">
              Od lat przyjmujemy rodziny z dziećmi oraz dziadków z wnukami,
              dbając o domową atmosferę, bezpieczeństwo i niezapomniane
              wspomnienia naszych gości.
            </p>
          </div>

          <div className="pt-2  fade-in animation-delay-600">
            <a
              href="#values"
              className="inline-flex items-center text-resort-green hover:underline font-medium"
            >
              Poznaj nasze wartości <MoveRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
