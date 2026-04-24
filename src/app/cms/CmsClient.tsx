"use client";

import { useEffect, useState } from "react";
import type { Accommodation } from "@/components/Houses/types";
import AccommodationForm from "@/components/cms/AccommodationForm";

// Zmień te dane logowania według potrzeb
const CMS_USERNAME = "admin";
const CMS_PASSWORD = "wzgorze2024";
const SESSION_KEY = "cms_auth";

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

function LoginDialog({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === CMS_USERNAME && password === CMS_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onLogin();
    } else {
      setFailed(true);
      setPassword("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-6 text-center">Panel CMS</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Login</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setFailed(false);
              }}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              autoFocus
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Hasło</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setFailed(false);
              }}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          {failed && (
            <p className="text-red-600 text-sm text-center">
              Nieprawidłowy login lub hasło
            </p>
          )}
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-brand text-white text-sm font-medium rounded hover:bg-brand/90"
          >
            Zaloguj
          </button>
        </form>
      </div>
    </div>
  );
}

export default function CmsClient() {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState<Tab>("houses");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!authenticated) return;
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
  }, [authenticated]);

  const updateItem = (list: Tab, id: string, updated: Accommodation) =>
    setData((prev) => ({
      ...prev!,
      [list]: prev![list].map((item) => (item.id === id ? updated : item)),
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

  if (!authenticated) {
    return <LoginDialog onLogin={() => setAuthenticated(true)} />;
  }

  if (loading) return <p className="p-8">Ładowanie...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;

  const items = data![tab];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">CMS – Noclegi</h1>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-brand text-white text-sm font-medium rounded hover:bg-brand/90 disabled:opacity-50"
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
                ? "border-brand text-brand"
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
          />
        ))}
      </div>

    </div>
  );
}
