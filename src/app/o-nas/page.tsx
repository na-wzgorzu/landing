import { CTASection } from "@/components/CTASection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StorySection } from "@/components/StorySection";
import { ValuesSection } from "@/components/ValuesSection";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - O nas",
};

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <StorySection />
      <FeaturesSection />
      <ValuesSection />
      <CTASection />
    </div>
  );
}
