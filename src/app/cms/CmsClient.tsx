"use client";

import { useEffect, useState } from "react";
import type { Accommodation } from "@/components/Houses/types";
import AccommodationForm from "@/components/cms/AccommodationForm";
import LoginForm from "./LoginForm";
import { SESSION_KEY, API_URL } from "./constants";
import {
  DEFAULT_RESERVATION_NOTICE,
  type CmsData,
  type ReservationNotice,
} from "./data";

type Tab = "houses" | "rooms" | "reservation";

export default function CmsClient() {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<CmsData | null>(null);
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
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json() as Promise<CmsData>;
      })
      .then((fetched) => {
        setData({
          ...fetched,
          reservationNotice:
            fetched.reservationNotice ?? DEFAULT_RESERVATION_NOTICE,
        });
      })
      .catch(() => setError("Nie udało się pobrać danych"))
      .finally(() => setLoading(false));
  }, [authenticated]);

  const updateItem = (
    list: Extract<Tab, "houses" | "rooms">,
    id: string,
    updated: Accommodation,
  ) =>
    setData((prev) => ({
      ...prev!,
      [list]: prev![list].map((item) => (item.id === id ? updated : item)),
    }));

  const updateReservationNotice = (patch: Partial<ReservationNotice>) =>
    setData((prev) => ({
      ...prev!,
      reservationNotice: {
        ...(prev!.reservationNotice ?? DEFAULT_RESERVATION_NOTICE),
        ...patch,
      },
    }));

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(API_URL, {
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
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  if (loading) return <p className="p-8">Ładowanie...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;

  const reservationNotice =
    data!.reservationNotice ?? DEFAULT_RESERVATION_NOTICE;

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
        <button
          type="button"
          onClick={() => setTab("reservation")}
          className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
            tab === "reservation"
              ? "border-brand text-brand"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Rezerwacje
        </button>
      </div>

      {tab === "reservation" ? (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-4">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={reservationNotice.enabled}
              onChange={(e) =>
                updateReservationNotice({ enabled: e.target.checked })
              }
            />
            Pokaż komunikat na stronie rezerwacji
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700">
              Treść komunikatu
            </span>
            <textarea
              value={reservationNotice.text}
              onChange={(e) =>
                updateReservationNotice({ text: e.target.value })
              }
              rows={6}
              className="border border-gray-300 rounded px-2 py-1 text-sm resize-y"
            />
          </label>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {data![tab].map((item) => (
            <AccommodationForm
              key={item.id}
              accommodation={item}
              onChange={(updated) => updateItem(tab, item.id, updated)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
