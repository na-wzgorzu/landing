import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Cennik",
};

async function getHtml(): Promise<string> {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://na-wzgorzu.vercel.app/api/cennik"
      : "http://localhost:3000/api/cennik";
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Nie udało się pobrać danych");
  }

  return res.text();
}

export default async function Page() {
  const html = await getHtml();
  return (
    <div className="overflow-hidden">
      <div
        className="py-8 overflow-scroll"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
