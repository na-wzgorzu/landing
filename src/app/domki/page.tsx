import { AccommodationList } from "@/components/Houses/AccommodationList";
import React from "react";
import { Metadata } from "next";
import { houses } from "@/data/houses";

export const metadata: Metadata = {
  title: "Na wzgórzu - Domki",
};

export default function Houses() {
  return (
    <div className="w-full flex flex-col items-center gap-x-4 bg-gray-50">
      <AccommodationList
        type="domek"
        descriptionComponent={
          <p className="text-lg text-gray-600 mb-4 text-center">
            Oferujemy trzynaście domków różnego typu
          </p>
        }
        accommodations={houses}
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
              src="/gallery/domki13.jpg"
              alt="Rzeka pomiędzy górami w Brodnickim Parku Krajobrazowym"
              className="w-full min-h-64 h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src="/gallery/inne105.jpg"
              alt="Rzeka pomiędzy górami w Brodnickim Parku Krajobrazowym"
              className="w-full min-h-64 h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        <p className="text-gray-600">
          Domki piętrowe (D1-D8) są położone w pierwszej linii od jeziora,
          odległość do brzegu to 150 m, a do budynku głównego z recepcją,
          jadalnią i pokojami około 80 m. Małe domki parterowe (D9-D10) znajdują
          się w drugiej linii, zaraz za domkami piętrowymi. Domki piętrowe i
          parterowe są wykonane z bali i wykończone w drewnie. Domki parterowe
          apartamenty (A1-A3) stoją w trzeciej linii od jeziora, jest to osobna
          zabudowa (bungalow), zlokalizowana bliżej budynku głównego, sali gier
          oraz placu zabaw. Domki parterowe apartamenty są wykonane z drewna i
          wykończone jak mieszkanie. Każdy domek u nas ma wydzieloną działkę z
          własną bujawką ogrodową.
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
