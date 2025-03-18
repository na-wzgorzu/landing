import { About } from "@/components/About";
import { Attractions } from "@/components/Attractions";
import { Hero } from "@/components/Hero";
import { HousesCarousel } from "@/components/Houses/HousesCarousel";
import { HousesBanner } from "@/components/HousesBanner";
// import { Newsletter } from "@/components/Newsletter";
// import { Reviews } from "@/components/Reviews";
import { VerticalDivider } from "@/components/VerticalDivider";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col gap-10 overflow-hidden">
      <Hero />

      <VerticalDivider color={"black"} />

      <HousesCarousel />
      <VerticalDivider color={"black"} />

      <About />

      <VerticalDivider color={"black"} />

      <Attractions />

      <HousesBanner />

      <div className="h-10" />
      {/* <VerticalDivider color={"black"} /> */}

      {/* <Reviews /> */}

      {/* <Newsletter /> */}
    </div>
  );
}
