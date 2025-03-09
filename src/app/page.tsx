import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { HousesCarousel } from "@/components/Houses/HousesCarousel";
import { VerticalDivider } from "@/components/VerticalDivider";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <Hero />
      <VerticalDivider />

      <HousesCarousel />
      <VerticalDivider />

      <About />

      <div className="min-h-[500px] bg-amber-100" />
    </div>
  );
}
