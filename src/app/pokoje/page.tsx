import { HousesPage } from "@/components/Houses";
import { apartments } from "@/data/houses";
import React from "react";

export default function Apartments() {
  return (
    <div className="max-w-screen-lg w-full mx-auto flex flex-col gap-4">
      <HousesPage houses={apartments} />
    </div>
  );
}
