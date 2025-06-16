import { AccommodationDetails } from "@/components/Houses/AccommodationDetails";
import React from "react";
import { Metadata } from "next";
import { accommodationList } from "@/data/houses";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const accommodation = accommodationList.find((acc) => acc.id === params.id);

  return {
    title: accommodation ? `Na wzgórzu - ${accommodation.name}` : "Na wzgórzu",
  };
}

type Props = {
  params: Promise<{ id: string }>;
};
export default async function HousesDetails({ params }: Props) {
  const { id } = await params;
  return (
    <div className="w-full flex flex-col items-center gap-4 bg-gray-50">
      {/* <HousesPage houses={houses} /> */}
      <AccommodationDetails id={id} />
    </div>
  );
}
