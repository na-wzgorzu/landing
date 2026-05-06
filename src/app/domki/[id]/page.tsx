import React from "react";
import { Metadata } from "next";
import { houses } from "@/data/houses";
import { HouseDetailsClient } from "./HouseDetailsClient";

export function generateStaticParams() {
  return houses.map((house) => ({
    id: house.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const accommodation = houses.find((acc) => acc.id === id);

  return {
    title: accommodation ? `Na wzgórzu - ${accommodation.name}` : "Na wzgórzu",
    alternates: {
      canonical: `https://na-wzgorzu.pl/domki/${id}`,
    },
  };
}

export default async function HousesDetails({ params }: Props) {
  const { id } = await params;

  return (
    <div className="w-full flex flex-col items-center gap-4 bg-gray-50">
      <HouseDetailsClient id={id} />
    </div>
  );
}
