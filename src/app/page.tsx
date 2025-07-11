import { About } from "@/components/About";
import { FoodService } from "@/components/FoodService";
import { GoogleMap } from "@/components/GoogleMap";
import { Hero } from "@/components/Hero";
import { ApartmentsCarousel } from "@/components/Houses/ApartmentsCarousel";
import { HousesCarousel } from "@/components/Houses/HousesCarousel";
import { Reviews } from "@/components/Reviews";
import { OfferSection } from "@/components/OfferSection";
import { VerticalDivider } from "@/components/VerticalDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Strona główna",
};

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
      <VerticalDivider color={"black"} />
      <OfferSection />
      <VerticalDivider color={"black"} />
      <GoogleMap />
      <VerticalDivider color={"black"} />
      <Reviews />
      <VerticalDivider color={"black"} />
      <div />
    </div>
  );
}
