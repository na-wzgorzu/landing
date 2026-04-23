"use client";

import { useEffect, useState } from "react";
import type { Accommodation } from "@/components/Houses/types";
import AccommodationForm from "@/components/cms/AccommodationForm";

type Data = {
  houses: Accommodation[];
  rooms: Accommodation[];
};

type Tab = "houses" | "rooms";

const EMPTY: Omit<Accommodation, "id"> = {
  name: "",
  type: "domek",
  image: "",
  images: [],
  description: "",
  capacity: "",
  bedrooms: "",
  size: 0,
  amenities: [],
};

export default function CmsClient() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState<Tab>("houses");

  useEffect(() => {
    fetch("https://na-wzgorzu.pl/api.php")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json() as Promise<Data>;
      })
      .then((fetched) => {
        console.log("CMS data:", fetched);
        setData(fetched);
      })
      .catch(() => setError("Nie udało się pobrać danych"))
      .finally(() => setLoading(false));
  }, []);

  const updateItem = (list: Tab, id: string, updated: Accommodation) =>
    setData((prev) => ({
      ...prev!,
      [list]: prev![list].map((item) => (item.id === id ? updated : item)),
    }));

  const addItem = (list: Tab) =>
    setData((prev) => ({
      ...prev!,
      [list]: [
        ...prev![list],
        { ...EMPTY, id: Date.now().toString(), type: list === "houses" ? "domek" : "pokoj" },
      ],
    }));

  const removeItem = (list: Tab, id: string) =>
    setData((prev) => ({
      ...prev!,
      [list]: prev![list].filter((item) => item.id !== id),
    }));

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("https://na-wzgorzu.pl/api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
    } catch {
      setError("Nie udało się zapisać danych");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-8">Ładowanie...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;

  const items = data![tab];
  const label = tab === "houses" ? "domek" : "pokój";

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">CMS – Noclegi</h1>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Zapisywanie..." : "Zapisz zmiany"}
        </button>
      </div>

      {error && <p className="mb-4 text-red-600 text-sm">{error}</p>}

      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {(["houses", "rooms"] as Tab[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
              tab === t
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {t === "houses" ? "Domki" : "Pokoje"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <AccommodationForm
            key={item.id}
            accommodation={item}
            onChange={(updated) => updateItem(tab, item.id, updated)}
            onRemove={() => removeItem(tab, item.id)}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => addItem(tab)}
        className="mt-4 text-sm text-blue-600 hover:text-blue-800"
      >
        + Dodaj {label}
      </button>
    </div>
  );
}
