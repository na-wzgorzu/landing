import { AccommodationList } from "@/components/Houses/AccommodationList";

import React from "react";

export default function Houses() {
  return (
    <div className="w-full flex flex-col items-center gap-4 bg-gray-50">
      {/* <HousesPage houses={houses} /> */}
      <AccommodationList />
    </div>
  );
}
