import { AccommodationDetails } from "@/components/Houses/AccommodationDetails";
import React from "react";

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
