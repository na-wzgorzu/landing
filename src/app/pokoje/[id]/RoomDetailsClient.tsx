"use client";

import { useState, useEffect } from "react";
import { API_URL } from "@/app/cms/constants";
import { Accommodation } from "@/components/Houses/types";
import { AccommodationDetails } from "@/components/Houses/AccommodationDetails";
import { AccommodationSkeleton } from "@/components/Houses/AccommodationSkeleton";

type Data = {
  houses: Accommodation[];
  rooms: Accommodation[];
};

export function RoomDetailsClient({ id }: { id: string }) {
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json() as Promise<Data>;
      })
      .then((data) => {
        const found = data.rooms.find((r) => r.id === id);
        setAccommodation(found ?? null);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <AccommodationSkeleton />;
  if (error || !accommodation) return null;

  return <AccommodationDetails accommodation={accommodation} />;
}
