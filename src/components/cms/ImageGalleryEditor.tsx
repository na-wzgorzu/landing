"use client";

import { useEffect, useState } from "react";
import { IMAGES_URL } from "@/app/cms/constants";
import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";

type Props = {
  items: string[];
  onChange: (updated: string[]) => void;
};

export default function ImageGalleryEditor({ items, onChange }: Props) {
  const [available, setAvailable] = useState<string[]>([]);

  useEffect(() => {
    fetch(IMAGES_URL)
      .then((r) => r.json())
      .then((data: string[]) => setAvailable(data))
      .catch(() => {});
  }, []);

  const add = (path: string) => {
    if (path && !items.includes(path)) onChange([...items, path]);
  };

  const remove = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const move = (index: number, direction: -1 | 1) => {
    const next = [...items];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  const options = available.filter((p) => !items.includes(p));

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">Galeria</span>

      <select
        className="border border-gray-300 rounded px-2 py-1 text-sm"
        value=""
        onChange={(e) => add(e.target.value)}
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

      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1">
          <span className="flex-1 text-sm text-gray-600 truncate">{item}</span>
          <button
            type="button"
            onClick={() => move(i, -1)}
            disabled={i === 0}
            className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-25"
          >
            <ChevronUp size={16} />
          </button>
          <button
            type="button"
            onClick={() => move(i, 1)}
            disabled={i === items.length - 1}
            className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-25"
          >
            <ChevronDown size={16} />
          </button>
          <button
            type="button"
            onClick={() => remove(i)}
            className="p-1 text-red-400 hover:text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
