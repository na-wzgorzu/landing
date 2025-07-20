import { Atractions } from "@/components/Atractions";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Okolica",
  alternates: {
    canonical: "https://na-wzgorzu.pl/okolica",
  },
};

export default function AtractionsPage() {
  return <Atractions />;
}
