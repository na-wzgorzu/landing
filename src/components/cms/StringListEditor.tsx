"use client";

type Props = {
  label: string;
  items: string[];
  onChange: (updated: string[]) => void;
};

export default function StringListEditor({ label, items, onChange }: Props) {
  const update = (index: number, value: string) => {
    const next = items.map((item, i) => (i === index ? value : item));
    onChange(next);
  };

  const remove = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const add = () => {
    onChange([...items, ""]);
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => update(i, e.target.value)}
            className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
          />
          <button
            type="button"
            onClick={() => remove(i)}
            className="text-red-500 hover:text-red-700 text-sm px-2"
          >
            Usuń
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="self-start text-sm text-blue-600 hover:text-blue-800 mt-1"
      >
        + Dodaj
      </button>
    </div>
  );
}
