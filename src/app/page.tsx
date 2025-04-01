import { About } from "@/components/About";
import { FoodService } from "@/components/FoodService";
import { GoogleMap } from "@/components/GoogleMap";
import { Hero } from "@/components/Hero";
import { ApartmentsCarousel } from "@/components/Houses/ApartmentsCarousel";
import { HousesCarousel } from "@/components/Houses/HousesCarousel";
import { HousesBanner } from "@/components/HousesBanner";
import { Newsletter } from "@/components/Newsletter";
import { Reviews } from "@/components/Reviews";
import { VerticalDivider } from "@/components/VerticalDivider";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col gap-10 overflow-hidden">
      <Hero />
      <VerticalDivider color={"black"} />
      <About />
      <VerticalDivider color={"black"} />
      <HousesCarousel />
      <ApartmentsCarousel />
      <VerticalDivider color={"black"} />
      <FoodService />
      <HousesBanner />
      <GoogleMap />
      <VerticalDivider color={"black"} />
      <Reviews />
      <Newsletter />
    </div>
  );
}
