import { Accommodation } from "@/components/Houses/types";
// import house1Img from "@/assets/hero.jpg";
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
import house23Img from "@/../public/2-house/domki3.jpg";
// 4-house
import house41Img from "@/../public/4-house/apartamenty1.jpg";
import house42Img from "@/../public/4-house/apartamenty2.jpg";
import house43Img from "@/../public/4-house/apartamenty3.jpg";
import house44Img from "@/../public/4-house/apartamenty4.jpg";
import house45Img from "@/../public/4-house/apartamenty5.jpg";
import house46Img from "@/../public/4-house/apartamenty6.jpg";
import house47Img from "@/../public/4-house/apartamenty7.jpg";
import house48Img from "@/../public/4-house/apartamenty8.jpg";
import house49Img from "@/../public/4-house/apartamenty9.jpg";
import house410Img from "@/../public/4-house/apartamenty10.jpg";
// 5-house
import house51Img from "@/../public/5-house/domki_nad_jeziorem1.jpg";
import house52Img from "@/../public/5-house/domki_nad_jeziorem2.jpg";
import house53Img from "@/../public/5-house/domki_nad_jeziorem3.jpg";
import house54Img from "@/../public/5-house/domki_nad_jeziorem4.jpg";
import house55Img from "@/../public/5-house/domki_nad_jeziorem5.jpg";
import house56Img from "@/../public/5-house/domki_nad_jeziorem6.jpg";
import house57Img from "@/../public/5-house/domki_nad_jeziorem7.jpg";
import house58Img from "@/../public/5-house/domki_nad_jeziorem8.jpg";

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
    name: "Domki piętrowe 5-7 osobowe",
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
      "Domek piętrowy 5 (max 7) osobowy ma powierzchnię 60 m2. Na piętrze znajdują się dwie sypialnie (2 i 3 osobowa) i loggia. Na parterze salon z rozkładaną wersalką, łazienka, aneks kuchenny oraz taras. Są umeblowane i wyposażone w węzeł sanitarny (prysznic, toaleta, umywalka), aneks kuchenny (zlew, lodówka, mała kuchenka i czajnik elektryczny, garnki, patelnia, szklanki, talerze, sztućce, deska do krojenia, akcesoria do zmywania), telewizor LCD (cyfrowa telewizja naziemna), pościel, siatki przeciwko owadom w oknach, kotary osłaniające od słońca na tarasach, meble ogrodowe, dwa leżaki, naścienne grzejniki elektryczne. Każdy domek ma własną wydzieloną działkę z bujawką. W ogródku przy domku można grillować. Domki piętrowe stoją w pierwszej linii od jeziora. Mamy osiem takich domków.",
    capacity: "5 (max 7)",
    bedrooms: "2 sypialnie + salon",
    size: 60,
    amenities: [
      "Łazienka (toaleta, prysznic, umywalka)",
      "Telewizor LCD",
      "Aneks kuchenny",
      "Pościel",
      "Siatki przeciw owadom w oknach",
      "Kotary osłaniające od słońca na tarasach",
      "Wydzielona działka z bujawką ogrodową",
      "Naścienne grzejniki elektryczne",
      "Możliwość grillowania w ogródku",
    ],
  },
  {
    id: "2",
    name: "Domki parterowe apartamenty 4-6 osobowe",
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
      house410Img,
    ],
    description:
      "Domek parterowy apartament 4 (max 6) osobowy ma powierzchnię 60 m2. Apartamenty znajdują się w osobnej zabudowie (bungalow), w każdym są dwie sypialnie 2 osobowe, salon 30 m2 z rozkładaną wersalką, kuchnia, łazienka. Są umeblowane i wyposażone w węzeł sanitarny (prysznic, toaleta, umywalka), kuchnię (zlew, lodówka, kuchenka i czajnik elektryczny, garnki, patelnia, szklanki, talerze, sztućce, deska do krojenia, akcesoria do zmywania), telewizor LCD (cyfrowa telewizja naziemna), pościel, siatki przeciwko owadom w oknach, meble ogrodowe, dwa leżaki, internet Wi-Fi, naścienne grzejniki elektryczne. Każdy domek ma własną wydzieloną działkę z bujawką. W ogródku można grillować. Domki parterowe apartamenty stoją w trzeciej linii od jeziora. Mamy trzy takie domki.",
    capacity: "4 (max 6)",
    bedrooms: "2 sypialnie + salon",
    size: 60,
    amenities: [
      "Łazienka (toaleta, prysznic, umywalka)",
      "Telewizor LCD",
      "Kuchnia",
      "Internet Wi-Fi",
      "Pościel",
      "Siatki przeciw owadom w oknach",
      "Wydzielona działka z bujawką ogrodową",
      "Meble ogrodowe",
      "Naścienne grzejniki elektryczne",
      "Możliwość grillowania w ogródku",
    ],
  },
  {
    id: "3",
    name: "Domki parterowe 2-3 osobowe",
    type: "domek",
    image: house21Img,
    images: [house21Img, house22Img, house23Img],
    description:
      "Domek parterowy 2 (max 3) osobowy ma powierzchnię 25 m2. Jest to jedna izba z aneksem kuchennym i łazienką. Każdy domek ma również taras. W salonie jest tapczan i rozkładana wersalka. Są umeblowane i wyposażone w węzeł sanitarny (prysznic, toaleta, umywalka), aneks kuchenny (zlew, lodówka, mała kuchenka i czajnik elektryczny, garnki, patelnia, szklanki, talerze, sztućce, deska do krojenia, akcesoria do zmywania), telewizor LCD (cyfrowa telewizja naziemna), pościel, siatki przeciwko owadom w oknach, kotary osłaniające od słońca na tarasach, meble ogrodowe, dwa leżaki, naścienne grzejniki elektryczne. Każdy domek ma własną wydzieloną działkę z bujawką. W ogródku przy domku można grillować. Domki parterowe stoją w drugiej linii od jeziora. Mamy dwa takie domki.",
    capacity: "2 (max 3)",
    bedrooms: "Jedna izba",
    size: 25,
    amenities: [
      "Łazienka (toaleta, prysznic, umywalka)",
      "Telewizor LCD",
      "Aneks kuchenny",
      "Pościel",
      "Siatki przeciw owadom w oknach",
      "Kotary osłaniające od słońca na tarasach",
      "Wydzielona działka z bujawką ogrodową",
      "Meble ogrodowe",
      "Naścienne grzejniki elektryczne",
      "Możliwość grillowania w ogródku",
    ],
  },
  {
    id: "5",
    name: "Pokoje 3 osobowe z tarasem",
    type: "pokoj",
    image: room34Img,
    images: [room34Img, room36Img, room35Img, room33Img],
    description:
      "Mają powierzchnię około 20 m2 (pokój + przedpokój z szafą + łazienka) oraz taras 7 m2. Każdy jest umeblowany i wyposażony w: węzeł sanitarny (prysznic, toaleta, umywalka), lodówkę, czajnik elektryczny, szklanki, telewizor LCD (cyfrowa telewizja naziemna), pościel, moskitiery w oknach. Mamy trzy takie pokoje.",
    capacity: "3",
    bedrooms: 1,
    size: 20,
    amenities: [
      "Łazienka (prysznic, toaleta, umywalka)",
      "Czajnik elektryczny",
      "Szklanki",
      "Lodówka",
      "Telewizor LCD",
      "Pościel",
      "Moskitiery w oknach",
      "Taras",
    ],
  },
  // Rooms
  {
    id: "4",
    name: "Pokoje 2 osobowe bez tarasu",
    type: "pokoj",
    image: room24Img,
    images: [room24Img, room23Img, room22Img, room21Img, room25Img],
    description:
      "Mają powierzchnię około 15 m2 (pokój + przedpokój z szafą + łazienka). Każdy jest umeblowany i wyposażony w: węzeł sanitarny (prysznic, toaleta, umywalka), lodówkę, czajnik elektryczny, szklanki, telewizor LCD (cyfrowa telewizja naziemna, na zdjęciach są jeszcze stare telewizory), pościel, moskitiery w oknach. Mamy sześć takich pokoi.",
    capacity: "2",
    bedrooms: 1,
    size: 15,
    amenities: [
      "Łazienka (prysznic, toaleta, umywalka)",
      "Czajnik elektryczny",
      "Szklanki",
      "Lodówka",
      "Telewizor LCD",
      "Pościel",
      "Moskitiery w oknach",
    ],
  },
  {
    id: "6",
    name: "Pokoje 3 osobowe bez tarasu",
    type: "pokoj",
    image: room32Img,
    images: [room32Img, room31Img],
    description:
      "Mają powierzchnię około 20 m2 (pokój + przedpokój z szafą + łazienka). Każdy jest umeblowany i wyposażony w: węzeł sanitarny (prysznic, toaleta, umywalka), lodówkę, czajnik elektryczny, szklanki, telewizor LCD (cyfrowa telewizja naziemna, na zdjęciach są jeszcze stare telewizory), pościel, moskitiery w oknach. Mamy dwa takie pokoje.",
    capacity: "3",
    bedrooms: 1,
    size: 20,
    amenities: [
      "Łazienka (prysznic, toaleta, umywalka)",
      "Czajnik elektryczny",
      "Szklanki",
      "Lodówka",
      "Telewizor LCD",
      "Pościel",
      "Moskitiery w oknach",
    ],
  },
  {
    id: "7",
    name: "Pokoje 4 osobowe bez tarasu",
    type: "pokoj",
    image: room41Img,
    images: [room41Img, room42Img],
    description:
      "Mają powierzchnię około 25 m2 (pokój + przedpokój z szafą + łazienka). Każdy jest umeblowany i wyposażony w: węzeł sanitarny (prysznic, toaleta, umywalka), lodówkę, czajnik elektryczny, szklanki, telewizor LCD (cyfrowa telewizja naziemna, na zdjęciach są jeszcze stare telewizory), pościel, moskitiery w oknach. Mamy dwa takie pokoje.",
    capacity: "4",
    bedrooms: 1,
    size: 25,
    amenities: [
      "Łazienka (prysznic, toaleta, umywalka)",
      "Czajnik elektryczny",
      "Szklanki",
      "Lodówka",
      "Telewizor LCD",
      "Pościel",
      "Moskitiery w oknach",
    ],
  },
];
