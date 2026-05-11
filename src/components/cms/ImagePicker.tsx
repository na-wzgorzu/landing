"use client";

import { useEffect, useState } from "react";
import { IMAGES_URL } from "@/app/cms/constants";
import { Trash2 } from "lucide-react";

type Props = {
  value: string;
  onChange: (path: string) => void;
};

export default function ImagePicker({ value, onChange }: Props) {
  const [available, setAvailable] = useState<string[]>([]);

  useEffect(() => {
    fetch(IMAGES_URL)
      .then((r) => r.json())
      .then((data: string[]) => setAvailable(data))
      .catch(() => {});
  }, []);

  const options = available.filter((p) => p !== value);

  return (
    <div className="flex flex-col gap-2">
      <select
        className="border border-gray-300 rounded px-2 py-1 text-sm"
        value=""
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Wybierz zdjęcie…
        </option>
        {options.map((path) => (
          <option key={path} value={path}>
            {path}
          </option>
        ))}
      </select>

      {value && (
        <div className="flex items-center gap-1">
          <span className="flex-1 text-sm text-gray-600 truncate">{value}</span>
          <button
            type="button"
            onClick={() => onChange("")}
            className="p-1 text-red-400 hover:text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
