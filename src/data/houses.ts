import { House } from "@/components/Houses/types";
import house1Img from "@/assets/hero.jpg";

export const houses: House[] = [
  {
    name: "Domek parterowy 2-3 osobowy",
    image: house1Img,
    description:
      "Przytulny domek dla dwóch osób o powierzchni 25 m². Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę. Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę",
    price: 255,
    size: "25 m²",
    guests: "2-3",
    amenities: [
      "wifi",
      "bigBed",
      "shower",
      "dryer",
      "tv",
      "kettle",
      "parking",
      "animal",
      "breakfast",
      "playground",
    ],
  },
  {
    name: "Domek parterowy 4-osobowy PREMIUM",
    image: house1Img,
    description:
      "Przytulny domek dla dwóch osób o powierzchni 25 m². Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę. Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę",
    price: 390,
    size: "45 m²",
    guests: "4-5",
    amenities: [
      "wifi",
      "bigBed",
      "bath",
      "dryer",
      "tv",
      "kettle",
      "parking",
      "animal",
      "breakfast",
      "playground",
    ],
  },
];

export const apartments: House[] = [
  {
    name: "Pokoje",
    image: house1Img,
    description: `
      Przytulne pokoje o powierzchni od 12 m² do 27 m². </br>
      <strong>- pokoje 2-osobowe bez tarasu</br></strong>
      <strong>- pokoje 3-osobowe z tarasem oraz bez tarasu</br></strong>
      <strong>- pokoje 4-osobowe bez tarasu</br></br></strong>
      Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę.
      Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę
      `,
    price: 255,
    size: "12 - 27m²",
    guests: "2-4",
    amenities: [
      "wifi",
      "bigBed",
      "shower",
      "dryer",
      "tv",
      "kettle",
      "parking",
      "animal",
      "breakfast",
      "playground",
    ],
  },
];
