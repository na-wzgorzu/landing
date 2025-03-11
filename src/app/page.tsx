// import { About } from "@/components/About";
// import { Attractions } from "@/components/Attractions";
import { Hero } from "@/components/Hero";
import { HousesCarousel } from "@/components/Houses/HousesCarousel";
// import { HousesBanner } from "@/components/HousesBanner";
// import { Newsletter } from "@/components/Newsletter";
import { VerticalDivider } from "@/components/VerticalDivider";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col gap-10">
      <Hero />

      {/* <div className="text-4xl flex items-center justify-center font-bold min-h-[500px]">
        Content
      </div> */}
      <VerticalDivider />

      <HousesCarousel />
      {/* <VerticalDivider /> */}

      {/* <About /> */}

      {/* <VerticalDivider /> */}

      {/* <Attractions /> */}

      {/* <HousesBanner /> */}

      {/* <Newsletter /> */}

      <div className="min-h-[500px] bg-amber-100" />
    </div>
  );
}
