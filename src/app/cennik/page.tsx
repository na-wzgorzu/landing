import React from "react";
import { Metadata } from "next";
import { Pricing } from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Na wzgórzu - Cennik",
  alternates: {
    canonical: "https://na-wzgorzu.pl/cennik",
  },
};

export default async function Page() {
  return (
    <div className="overflow-hidden">
      <div className="py-8 overflow-scroll">
        <Pricing />
      </div>
    </div>
  );
}
