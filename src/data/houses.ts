import { Accommodation, House } from "@/components/Houses/types";
import house1Img from "@/assets/hero.jpg";
import room1Img from "@/../public/gallery/apartamenty100.jpg";
import room2Img from "@/../public/gallery/apartamenty101.jpg";
import house2Img from "@/../public/gallery/build-1.jpg";
import house3Img from "@/../public/gallery/domki106.jpg";
// 2rooms-bt
import room21Img from "@/../public/2-room-bt/pokój_05.jpg";
import room22Img from "@/../public/2-room-bt/pokój_06.jpg";
import room23Img from "@/../public/2-room-bt/pokój_07.jpg";
import room24Img from "@/../public/2-room-bt/pokój_08.jpg";
import room25Img from "@/../public/2-room-bt/łazienka.jpg";
// 3rooms-bt
import room31Img from "@/../public/3-room-bt/pokój_11.jpeg";
import room32Img from "@/../public/3-room-bt/pokój_17.jpeg";
// 3rooms-t
import room33Img from "@/../public/3-room-t/hotel13.jpg";
import room34Img from "@/../public/3-room-t/pokój13.jpg";
import room35Img from "@/../public/3-room-t/pokój14.jpg";
import room36Img from "@/../public/3-room-t/pokój15.jpg";
// 4rooms-bt
import room41Img from "@/../public/4-room-bt/pokój_10.jpeg";
import room42Img from "@/../public/4-room-bt/pokój_18.jpeg";

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

export const rooms = [
  {
    name: "Pokój piętrowy 5-7 osobowy",
    image: room1Img,
    description:
      "Przestronny pokój o powierzchni 60 m². Na piętrze dwie sypialnie (2- i 3-osobowa) oraz loggia, na parterze salon z rozkładaną wersalką, łazienka, aneks kuchenny i taras. Położony w pierwszej linii od jeziora, zapewnia piękne widoki i wygodę.",
    price: 480,
    size: "60 m²",
    guests: "5-7",
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
    name: "Pokój parterowy 2-3 osobowy",
    image: room2Img,
    description:
      "Kompaktowy pokój o powierzchni 25 m². Posiada salon z rozkładaną wersalką i tapczanem, aneks kuchenny, łazienkę oraz taras. Położony w drugiej linii od jeziora, zapewnia spokojną atmosferę i komfortowy wypoczynek.",
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
];

export const accommodationList: Accommodation[] = [
  {
    id: "1",
    name: "Domek parterowy 2-3 osobowy",
    type: "domek",
    image: house3Img,
    images: [house3Img, house2Img, house1Img],
    description:
      "Przytulny domek dla dwóch osób o powierzchni 25 m². Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę. Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę",
    capacity: "2-3",
    bedrooms: 2,
    size: 25,
    features: ["Widok na jezioro", "Kominek", "Taras", "Parking", "Wi-Fi"],
    amenities: [
      "Pełne wyposażenie kuchni",
      "Prysznic",
      "Suszarka do włosów",
      "Telewizor",
      "Lodówka",
      "Czajnik",
      "Kuchenka",
      "Grill",
      "Plac zabaw",
    ],
  },
  {
    id: "2",
    name: "Domek parterowy 4-6 osobowy PREMIUM",
    type: "domek",
    image: house2Img,
    images: [house2Img, house1Img, house2Img],
    description:
      "Przytulny domek dla dwóch osób o powierzchni 45 m². Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę. Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę",
    capacity: "4-6",
    bedrooms: 3,
    size: 45,
    features: [
      "Duży taras",
      "Grill",
      "Dwie łazienki",
      "Blisko plaży",
      "Parking",
    ],
    amenities: [
      "Pełne wyposażenie kuchni",
      "Pościel i ręczniki",
      "Telewizor",
      "Lodówka",
      "Czajnik",
      "Kuchenka",
      "Zmywarka",
      "Grill",
      "Meble ogrodowe",
      "Miejsce na ognisko",
    ],
  },
  {
    id: "3",
    name: "Domek parterowy 5-7 osobowy",
    type: "domek",
    image: house1Img,
    images: [house1Img, house1Img, house1Img],
    description:
      "Przytulny domek dla dwóch osób o powierzchni 45 m². Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę. Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę",
    capacity: "5-7",
    bedrooms: 3,
    size: 45,
    features: [
      "Duży taras",
      "Grill",
      "Dwie łazienki",
      "Blisko plaży",
      "Parking",
    ],
    amenities: [
      "Pełne wyposażenie kuchni",
      "Pościel i ręczniki",
      "Telewizor",
      "Lodówka",
      "Czajnik",
      "Kuchenka",
      "Zmywarka",
      "Grill",
      "Meble ogrodowe",
      "Miejsce na ognisko",
    ],
  },
  // done
  {
    id: "5",
    name: "Pokoje 3 os. z tarasami",
    type: "pokoj",
    image: room36Img,
    images: [room36Img, room34Img, room35Img, room33Img],
    description:
      "Mają powierzchnię około 20 m2 (pokój, przedpokój z szafą i łazienka) oraz taras 7 m2. Są umeblowane i wyposażone w łazienkę (prysznic, toaleta, umywalka), małą lodówkę, czajnik elektryczny, szklanki, telewizor LCD (cyfrowa telewizja naziemna), pościel, moskitiery w oknach. Mamy trzy takie pokoje.",
    capacity: "3",
    bedrooms: 1,
    size: 20,
    amenities: [
      "Łazienka (prysznic, toaleta, umywalka)",
      "Czajnik elektryczny",
      "Szklanki",
      "Mała lodówka",
      "TV",
      "Pościel",
      "Moskitiery w oknach",
      "Taras",
    ],
  },
  // Rooms
  {
    id: "4",
    name: "Pokoje 2 os. bez tarasów",
    type: "pokoj",
    image: room24Img,
    images: [room24Img, room23Img, room22Img, room21Img, room25Img],
    description:
      "Mają powierzchnię około 15 m2 (pokój, przedpokój z szafą i łazienka). Są umeblowane i wyposażone w łazienkę (prysznic, toaleta, umywalka), małą lodówkę, czajnik elektryczny, szklanki, telewizor LCD (cyfrowa telewizja naziemna, na zdjęciach są jeszcze stare telewizory), pościel, moskitiery w oknach. Mamy sześć takich pokoi.",
    capacity: "2",
    bedrooms: 1,
    size: 15,
    amenities: [
      "Łazienka (prysznic, toaleta, umywalka)",
      "Czajnik elektryczny",
      "Szklanki",
      "Mała lodówka",
      "TV",
      "Pościel",
      "Moskitiery w oknach",
    ],
  },
  {
    id: "6",
    name: "Pokóje 3 osobowe bez tarasu",
    type: "pokoj",
    image: room32Img,
    images: [room32Img, room31Img],
    description:
      "Mają powierzchnię około 20 m2 (pokój, przedpokój z szafą i łazienka). Są umeblowane i wyposażone w łazienkę (prysznic, toaleta, umywalka), małą lodówkę, czajnik elektryczny, szklanki, telewizor LCD (cyfrowa telewizja naziemna, na zdjęciach są jeszcze stare telewizory), pościel, moskitiery w oknach. Mamy dwa takie pokoje.",
    capacity: "3",
    bedrooms: 1,
    size: 20,
    amenities: [
      "Łazienka (prysznic, toaleta, umywalka)",
      "Czajnik elektryczny",
      "Szklanki",
      "Mała lodówka",
      "TV",
      "Pościel",
      "Moskitiery w oknach",
    ],
  },
  {
    id: "7",
    name: "Pokoje 4 os. bez tarasów",
    type: "pokoj",
    image: room41Img,
    images: [room41Img, room42Img],
    description:
      "Mają powierzchnię około 25 m2 (pokój, przedpokój z szafą i łazienka). Są umeblowane i wyposażone w łazienkę (prysznic, toaleta, umywalka), małą lodówkę, czajnik elektryczny, szklanki, telewizor LCD (cyfrowa telewizja naziemna, na zdjęciach są jeszcze stare telewizory), pościel, moskitiery w oknach. Mamy dwa takie pokoje.",
    capacity: "4",
    bedrooms: 1,
    size: 25,
    amenities: [
      "Łazienka (prysznic, toaleta, umywalka)",
      "Czajnik elektryczny",
      "Szklanki",
      "Mała lodówka",
      "TV",
      "Pościel",
      "Moskitiery w oknach",
    ],
  },
];
