"use client";

import { CENNIK_URL } from "@/app/cms/constants";
import { useEffect, useState } from "react";

export const Pricing = () => {
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(CENNIK_URL)
      .then((res) => {
        console.log(
          "🔍 ~ useEffect() callback ~ src/components/Pricing.tsx:12 ~ res:",
          res,
        );
        if (!res.ok) throw new Error();
        return res.text();
      })
      .then(setHtml)
      .catch(() => setError("Nie udało się pobrać cennika."));
  }, []);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (html === null) {
    return <div className="text-gray-700">Ładowanie...</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
