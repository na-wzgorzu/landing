"use client";

import { useState, useEffect } from "react";
import { Accommodation } from "@/components/Houses/types";
import { AccommodationDetails } from "@/components/Houses/AccommodationDetails";
import { AccommodationSkeleton } from "@/components/Houses/AccommodationSkeleton";

type Data = {
  houses: Accommodation[];
  rooms: Accommodation[];
};

export function HouseDetailsClient({ id }: { id: string }) {
  const [accommodation, setAccommodation] = useState<Accommodation | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://na-wzgorzu.pl/api.php")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json() as Promise<Data>;
      })
      .then((data) => {
        const found = data.houses.find((h) => h.id === id);
        setAccommodation(found ?? null);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <AccommodationSkeleton />;
  if (error || !accommodation) return null;

  return <AccommodationDetails accommodation={accommodation} />;
}
