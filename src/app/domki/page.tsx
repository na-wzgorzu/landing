import { HousesPage } from "@/components/Houses";
import { houses } from "@/data/houses";
import React from "react";

export default function Houses() {
  return (
    <div className="max-w-screen-lg w-full mx-auto flex flex-col gap-4">
      <HousesPage houses={houses} />
    </div>
  );
}
