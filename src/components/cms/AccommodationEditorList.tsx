"use client";

import type { Accommodation } from "@/components/Houses/types";
import AccommodationForm from "./AccommodationForm";

type Props = {
  items: Accommodation[];
  onChange: (id: string, updated: Accommodation) => void;
};

export default function AccommodationEditorList({ items, onChange }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <AccommodationForm
          key={item.id}
          accommodation={item}
          onChange={(updated) => onChange(item.id, updated)}
        />
      ))}
    </div>
  );
}
