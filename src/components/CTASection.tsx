import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-resort-beige">
      <div className="section-container">
        {/* Final CTA */}
        <div className="mt-16 text-center  fade-in animation-delay-800">
          <h3 className="text-xl font-medium text-resort-text mb-4">
            Gotowy zaplanować idealny wypoczynek nad jeziorem?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt" className="cta-button">
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
