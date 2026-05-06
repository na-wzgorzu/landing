"use client";

import { useEffect, useState } from "react";
import type { Accommodation } from "@/components/Houses/types";
import AccommodationEditorList from "@/components/cms/AccommodationEditorList";
import CmsTabs from "@/components/cms/CmsTabs";
import ReservationNoticeForm from "@/components/cms/ReservationNoticeForm";
import LoginForm from "./LoginForm";
import { SESSION_KEY, API_URL } from "./constants";
import {
  DEFAULT_RESERVATION_NOTICE,
  type CmsData,
  type CmsTab,
  type ReservationNotice,
} from "./data";

export default function CmsClient() {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<CmsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState<CmsTab>("houses");

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
    list: Extract<CmsTab, "houses" | "rooms">,
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

      <CmsTabs activeTab={tab} onTabChange={setTab} />

      {tab === "reservation" ? (
        <ReservationNoticeForm
          notice={reservationNotice}
          onChange={updateReservationNotice}
        />
      ) : (
        <AccommodationEditorList
          items={data![tab]}
          onChange={(id, updated) => updateItem(tab, id, updated)}
        />
      )}
    </div>
  );
}
