import { Accommodation, House } from "@/components/Houses/types";
import house1Img from "@/assets/hero.jpg";
import room1Img from "@/../public/gallery/apartamenty100.jpg";
import room2Img from "@/../public/gallery/apartamenty101.jpg";
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
// 2-house
import house21Img from "@/../public/2-house/domki1.jpg";
import house22Img from "@/../public/2-house/domki2.jpg";
// 4-house
import house41Img from "@/../public/4-house/apartamenty1.jpg";
import house42Img from "@/../public/4-house/apartamenty2.jpg";
import house43Img from "@/../public/4-house/apartamenty3.jpg";
import house44Img from "@/../public/4-house/apartamenty4.jpg";
import house45Img from "@/../public/4-house/apartamenty04.jpg";
import house46Img from "@/../public/4-house/apartamenty5.jpg";
import house47Img from "@/../public/4-house/apartamenty6.jpg";
import house48Img from "@/../public/4-house/apartamenty7.jpg";
import house49Img from "@/../public/4-house/apartamenty8.jpg";
// 5-house
import house51Img from "@/../public/5-house/domki_nad_jeziorem1.jpg";
import house52Img from "@/../public/5-house/domki_nad_jeziorem2.jpg";
import house53Img from "@/../public/5-house/domki_nad_jeziorem3.jpg";
import house54Img from "@/../public/5-house/domki_nad_jeziorem4.jpg";
import house55Img from "@/../public/5-house/domki_nad_jeziorem5.jpg";
import house56Img from "@/../public/5-house/domki_nad_jeziorem6.jpg";
import house57Img from "@/../public/5-house/domki_nad_jeziorem7.jpg";
import house58Img from "@/../public/5-house/domki_nad_jeziorem8.jpg";

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
    name: "DOMIKI PIĘTROWE 5-7 osobowe",
    type: "domek",
    image: house51Img,
    images: [
      house51Img,
      house52Img,
      house53Img,
      house54Img,
      house55Img,
      house56Img,
      house57Img,
      house58Img,
    ],
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
  {
    id: "2",
    name: "DOMKI PARTEROWE APARTAMENTY 4-6 osobowe",
    type: "domek",
    image: house41Img,
    images: [
      house41Img,
      house42Img,
      house43Img,
      house44Img,
      house45Img,
      house46Img,
      house47Img,
      house48Img,
      house49Img,
    ],
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
    name: "DOMKI PARTEROWE 2-3 osobowe",
    type: "domek",
    image: house21Img,
    images: [house21Img, house22Img],
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
  // done
  {
    id: "5",
    name: "Pokoje 3 os. z tarasami",
    type: "pokoj",
    image: room34Img,
    images: [room34Img, room36Img, room35Img, room33Img],
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
