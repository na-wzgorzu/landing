import { Gastro } from "@/components/Gastro";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Gastronomia",
  alternates: {
    canonical: "https://na-wzgorzu.pl/gastronomia",
  },
};

export default function Gastronomia() {
  return <Gastro />;
}
