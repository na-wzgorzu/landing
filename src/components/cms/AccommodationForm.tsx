"use client";

import type { Accommodation } from "@/components/Houses/types";
import StringListEditor from "./StringListEditor";

type Props = {
  accommodation: Accommodation;
  onChange: (updated: Accommodation) => void;
  onRemove: () => void;
};

const field = (label: string, input: React.ReactNode) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    {input}
  </div>
);

const inputClass = "border border-gray-300 rounded px-2 py-1 text-sm";

export default function AccommodationForm({
  accommodation,
  onChange,
  onRemove,
}: Props) {
  const set = (patch: Partial<Accommodation>) =>
    onChange({ ...accommodation, ...patch });

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-4">
      {field(
        "Nazwa",
        <input
          type="text"
          value={accommodation.name}
          onChange={(e) => set({ name: e.target.value })}
          className={inputClass}
        />,
      )}

      {field(
        "Typ",
        <select
          value={accommodation.type}
          onChange={(e) =>
            set({ type: e.target.value as Accommodation["type"] })
          }
          className={inputClass}
        >
          <option value="domek">Domek</option>
          <option value="pokoj">Pokój</option>
        </select>,
      )}

      {field(
        "Pojemność",
        <input
          type="text"
          value={accommodation.capacity}
          onChange={(e) => set({ capacity: e.target.value })}
          className={inputClass}
        />,
      )}

      {field(
        "Sypialnie",
        <input
          type="text"
          value={accommodation.bedrooms}
          onChange={(e) => set({ bedrooms: e.target.value })}
          className={inputClass}
        />,
      )}

      {field(
        "Rozmiar (m²)",
        <input
          type="number"
          value={accommodation.size}
          onChange={(e) => set({ size: Number(e.target.value) })}
          className={inputClass}
        />,
      )}

      {field(
        "Zdjęcie główne",
        <input
          type="text"
          value={accommodation.image}
          onChange={(e) => set({ image: e.target.value })}
          className={inputClass}
        />,
      )}

      {field(
        "Opis",
        <textarea
          value={accommodation.description}
          onChange={(e) => set({ description: e.target.value })}
          rows={10}
          className={`${inputClass} resize-y`}
        />,
      )}

      <StringListEditor
        label="Galeria"
        items={accommodation.images}
        onChange={(images) => set({ images })}
      />

      <StringListEditor
        label="Wyposażenie"
        items={accommodation.amenities}
        onChange={(amenities) => set({ amenities })}
      />

      <button
        type="button"
        onClick={onRemove}
        className="self-end text-sm text-red-500 hover:text-red-700"
      >
        Usuń
      </button>
    </div>
  );
}
