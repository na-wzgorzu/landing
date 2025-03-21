import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const CTASection = () => {
  const ctaLinks = [
    {
      title: "Zakwaterowanie",
      description:
        "Sprawdź naszą ofertę komfortowych domków, apartamentów i pokoi hotelowych.",
      path: "/accommodations",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      delay: "0",
    },
    {
      title: "Wyżywienie",
      description:
        "Poznaj naszą restaurację serwującą domową kuchnię polską z lokalnych składników.",
      path: "/dining",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      delay: "200",
    },
    {
      title: "Atrakcje",
      description:
        "Dowiedz się o wielu możliwościach rekreacji dostępnych podczas pobytu.",
      path: "/activities",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      delay: "400",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-resort-beige">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-medium text-resort-text  fade-in">
            Doświadcz Na Wzgórzu
          </h2>
          <p className="text-resort-text/80  fade-in animation-delay-200">
            Jeśli szukasz miejsca, gdzie możesz odpocząć w otoczeniu natury,
            aktywnie spędzić czas i delektować się pysznym jedzeniem, Ośrodek
            Wypoczynkowy Na Wzgórzu czeka na Ciebie.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaLinks.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm group  fade-in"
              style={{ animationDelay: `${parseInt(item.delay) + 400}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-resort-text mb-2">
                  {item.title}
                </h3>
                <p className="text-resort-text/70 mb-4">{item.description}</p>
                <Link
                  href={item.path}
                  className="inline-flex items-center text-resort-green font-medium hover:underline"
                >
                  Dowiedz się więcej <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center  fade-in animation-delay-800">
          <h3 className="text-xl font-medium text-resort-text mb-4">
            Gotowy zaplanować idealny wypoczynek nad jeziorem?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="cta-button">
              Skontaktuj się z nami
            </Link>
            <Link href="/booking" className="cta-button-outline">
              Sprawdź dostępność
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
