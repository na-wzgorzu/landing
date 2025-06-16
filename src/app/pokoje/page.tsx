import { AccommodationList } from "@/components/Houses/AccommodationList";

import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Pokoje",
};

export default function Houses() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50">
      {/* <HousesPage houses={houses} /> */}
      <AccommodationList
        type="pokoj"
        descriptionComponent={
          <p className="text-lg text-gray-600 mb-4 text-center">
            Do dyspozycji Gości oddajemy trzynaście pokoi w budynku głównym
          </p>
        }
      />

      <div className="min-h-screen max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <DescriptionComponent />
      </div>
    </div>
  );
}

const DescriptionComponent = () => {
  return (
    <div className="mb-8 flex flex-col gap-8">
      {/* <div className="border-b-2 border-gray-300 rounded-full" /> */}

      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full flex flex-col gap-4">
        <div className="flex md:flex-row flex-col w-full gap-4">
          <div className="md:w-1/2 w-full">
            <img
              src="/gallery/hotel01.jpg"
              alt="Rzeka pomiędzy górami w Brodnickim Parku Krajobrazowym"
              className="w-full min-h-64 h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src="/gallery/hotel12.jpg"
              alt="Rzeka pomiędzy górami w Brodnickim Parku Krajobrazowym"
              className="w-full min-h-64 h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        <p className="text-gray-600">
          Budynek jest kameralny, odległość od wyjścia z pokoju do wyjścia z
          budynku to kilka kroków, a teren wokół jest zagospodarowany w altanki,
          ławy, stoły, bujawkę, komplet wypoczynkowy i atrakcje dla maluchów. W
          budynku głównym znajduje się również jadalnia, recepcja, pokój zabaw
          oraz dostęp do internetu Wi-Fi. Odległość z pokoi do jeziora to około
          250 metrów, plac zabaw jest oddalony o 50 metrów, podobnie jak parking
          (na rozpakowanie można podjechać samochodem bliżej wejścia).
          Mieszkając w pokojach, można grillować na terenie ośrodka – na
          przykład przy altankach lub w wiacie grillowej.
        </p>
      </div>

      <img
        src="/area.jpg"
        alt="Rzeka pomiędzy górami w Brodnickim Parku Krajobrazowym"
        className="w-full h-full min-h-64 object-cover rounded-xl"
        loading="lazy"
      />
    </div>
  );
};
