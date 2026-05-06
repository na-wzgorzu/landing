import { rooms } from "@/data/houses";
import { Metadata } from "next";
import React from "react";
import { RoomDetailsClient } from "./RoomDetailsClient";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const accommodation = rooms.find((acc) => acc.id === id);

  return {
    title: accommodation ? `Na wzgórzu - ${accommodation.name}` : "Na wzgórzu",
    alternates: {
      canonical: `https://na-wzgorzu.pl/pokoje/${id}`,
    },
  };
}

export default async function RoomDetails({ params }: Props) {
  const { id } = await params;

  return (
    <div className="w-full flex flex-col items-center gap-4 bg-gray-50">
      <RoomDetailsClient id={id} />
    </div>
  );
}
