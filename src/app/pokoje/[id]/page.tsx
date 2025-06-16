import { AccommodationDetails } from "@/components/Houses/AccommodationDetails";
import { accommodationList } from "@/data/houses";
import { Metadata } from "next";
import React from "react";

interface HouseDetailsParams {
  id: string;
}

type Props = {
  params: Promise<HouseDetailsParams>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const accommodation = accommodationList.find((acc) => acc.id === id);

  return {
    title: accommodation ? `Na wzgórzu - ${accommodation.name}` : "Na wzgórzu",
  };
}

export default async function HousesDetails({ params }: Props) {
  const { id } = await params;
  return (
    <div className="w-full flex flex-col items-center gap-4 bg-gray-50">
      {/* <HousesPage houses={houses} /> */}
      <AccommodationDetails id={id} />
    </div>
  );
}
