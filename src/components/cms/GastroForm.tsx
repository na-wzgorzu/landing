"use client";

import type { GastroContent } from "@/app/cms/data";
import StringListEditor from "./StringListEditor";

type Props = {
  content: GastroContent;
  onChange: (updated: GastroContent) => void;
};

type MealTime = GastroContent["mealTimes"]["items"][number];
type MealDetail = GastroContent["mealDetails"]["items"][number];

const inputClass = "border border-gray-300 rounded px-2 py-1 text-sm";

const field = (label: string, input: React.ReactNode) => (
  <label className="flex flex-col gap-1">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    {input}
  </label>
);

const sectionTitle = (title: string) => (
  <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
    {title}
  </h2>
);

type MealTimesEditorProps = {
  items: MealTime[];
  onChange: (items: MealTime[]) => void;
};

function MealTimesEditor({ items, onChange }: MealTimesEditorProps) {
  const update = (index: number, patch: Partial<MealTime>) => {
    onChange(items.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  };

  const remove = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">Godziny posiłków</span>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-[1fr_120px_auto] gap-2">
          <input
            type="text"
            value={item.name}
            onChange={(e) => update(index, { name: e.target.value })}
            className={inputClass}
            placeholder="Nazwa"
          />
          <input
            type="text"
            value={item.time}
            onChange={(e) => update(index, { time: e.target.value })}
            className={inputClass}
            placeholder="Godzina"
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="px-2 text-sm text-red-500 hover:text-red-700"
          >
            Usuń
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, { name: "", time: "" }])}
        className="self-start text-sm text-blue-600 hover:text-blue-800"
      >
        + Dodaj
      </button>
    </div>
  );
}

type MealDetailsEditorProps = {
  items: MealDetail[];
  onChange: (items: MealDetail[]) => void;
};

function MealDetailsEditor({ items, onChange }: MealDetailsEditorProps) {
  const update = (index: number, patch: Partial<MealDetail>) => {
    onChange(items.map((item, i) => (i === index ? { ...item, ...patch } : item)));
  };

  const remove = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium text-gray-700">Szczegóły posiłków</span>
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded p-3 flex flex-col gap-2">
          <input
            type="text"
            value={item.title}
            onChange={(e) => update(index, { title: e.target.value })}
            className={inputClass}
            placeholder="Tytuł"
          />
          <textarea
            value={item.description}
            onChange={(e) => update(index, { description: e.target.value })}
            rows={4}
            className={`${inputClass} resize-y`}
            placeholder="Opis"
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="self-start text-sm text-red-500 hover:text-red-700"
          >
            Usuń
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, { title: "", description: "" }])}
        className="self-start text-sm text-blue-600 hover:text-blue-800"
      >
        + Dodaj
      </button>
    </div>
  );
}

export default function GastroForm({ content, onChange }: Props) {
  const set = (patch: Partial<GastroContent>) => {
    onChange({ ...content, ...patch });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        {sectionTitle("Hero")}
        {field(
          "Tytuł",
          <input
            type="text"
            value={content.hero.title}
            onChange={(e) =>
              set({ hero: { ...content.hero, title: e.target.value } })
            }
            className={inputClass}
          />,
        )}
        {field(
          "Podtytuł",
          <input
            type="text"
            value={content.hero.subtitle}
            onChange={(e) =>
              set({ hero: { ...content.hero, subtitle: e.target.value } })
            }
            className={inputClass}
          />,
        )}
      </section>

      <section className="flex flex-col gap-4">
        {sectionTitle("Nasza Kuchnia")}
        {field(
          "Tytuł",
          <input
            type="text"
            value={content.kitchen.title}
            onChange={(e) =>
              set({ kitchen: { ...content.kitchen, title: e.target.value } })
            }
            className={inputClass}
          />,
        )}
        {field(
          "Opis",
          <textarea
            value={content.kitchen.description}
            onChange={(e) =>
              set({
                kitchen: { ...content.kitchen, description: e.target.value },
              })
            }
            rows={6}
            className={`${inputClass} resize-y`}
          />,
        )}
      </section>

      <section className="flex flex-col gap-4">
        {sectionTitle("Posiłki")}
        {field(
          "Tytuł godzin posiłków",
          <input
            type="text"
            value={content.mealTimes.title}
            onChange={(e) =>
              set({
                mealTimes: { ...content.mealTimes, title: e.target.value },
              })
            }
            className={inputClass}
          />,
        )}
        <MealTimesEditor
          items={content.mealTimes.items}
          onChange={(items) =>
            set({ mealTimes: { ...content.mealTimes, items } })
          }
        />
        {field(
          "Notatka pod godzinami",
          <textarea
            value={content.mealTimes.note}
            onChange={(e) =>
              set({ mealTimes: { ...content.mealTimes, note: e.target.value } })
            }
            rows={3}
            className={`${inputClass} resize-y`}
          />,
        )}
      </section>

      <section className="flex flex-col gap-4">
        {sectionTitle("Opcje wyżywienia")}
        {field(
          "Tytuł",
          <input
            type="text"
            value={content.mealOptions.title}
            onChange={(e) =>
              set({
                mealOptions: { ...content.mealOptions, title: e.target.value },
              })
            }
            className={inputClass}
          />,
        )}
        {field(
          "Opis",
          <textarea
            value={content.mealOptions.description}
            onChange={(e) =>
              set({
                mealOptions: {
                  ...content.mealOptions,
                  description: e.target.value,
                },
              })
            }
            rows={4}
            className={`${inputClass} resize-y`}
          />,
        )}
        <StringListEditor
          label="Lista opcji"
          items={content.mealOptions.items}
          onChange={(items) =>
            set({ mealOptions: { ...content.mealOptions, items } })
          }
        />
      </section>

      <section className="flex flex-col gap-4">
        {sectionTitle("Szczegóły posiłków")}
        {field(
          "Tytuł sekcji",
          <input
            type="text"
            value={content.mealDetails.title}
            onChange={(e) =>
              set({
                mealDetails: { ...content.mealDetails, title: e.target.value },
              })
            }
            className={inputClass}
          />,
        )}
        <MealDetailsEditor
          items={content.mealDetails.items}
          onChange={(items) =>
            set({ mealDetails: { ...content.mealDetails, items } })
          }
        />
      </section>

      <section className="flex flex-col gap-4">
        {sectionTitle("CTA i galeria")}
        {field(
          "Tekst przycisku cennika",
          <input
            type="text"
            value={content.pricingCta.text}
            onChange={(e) =>
              set({
                pricingCta: { ...content.pricingCta, text: e.target.value },
              })
            }
            className={inputClass}
          />,
        )}
        {field(
          "Link przycisku cennika",
          <input
            type="text"
            value={content.pricingCta.href}
            onChange={(e) =>
              set({
                pricingCta: { ...content.pricingCta, href: e.target.value },
              })
            }
            className={inputClass}
          />,
        )}
        {field(
          "Tytuł galerii",
          <input
            type="text"
            value={content.gallery.title}
            onChange={(e) =>
              set({ gallery: { ...content.gallery, title: e.target.value } })
            }
            className={inputClass}
          />,
        )}
      </section>

      <section className="flex flex-col gap-4">
        {sectionTitle("Diety specjalne")}
        {field(
          "Tytuł",
          <input
            type="text"
            value={content.dietaryOptions.title}
            onChange={(e) =>
              set({
                dietaryOptions: {
                  ...content.dietaryOptions,
                  title: e.target.value,
                },
              })
            }
            className={inputClass}
          />,
        )}
        {field(
          "Opis",
          <textarea
            value={content.dietaryOptions.description}
            onChange={(e) =>
              set({
                dietaryOptions: {
                  ...content.dietaryOptions,
                  description: e.target.value,
                },
              })
            }
            rows={4}
            className={`${inputClass} resize-y`}
          />,
        )}
        {field(
          "Wyróżniony fragment",
          <textarea
            value={content.dietaryOptions.highlight}
            onChange={(e) =>
              set({
                dietaryOptions: {
                  ...content.dietaryOptions,
                  highlight: e.target.value,
                },
              })
            }
            rows={3}
            className={`${inputClass} resize-y`}
          />,
        )}
        <StringListEditor
          label="Lista diet"
          items={content.dietaryOptions.items}
          onChange={(items) =>
            set({ dietaryOptions: { ...content.dietaryOptions, items } })
          }
        />
      </section>
    </div>
  );
}
