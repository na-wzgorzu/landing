import { Accommodation, House } from "@/components/Houses/types";
import house1Img from "@/assets/hero.jpg";
import room1Img from "@/../public/gallery/apartamenty100.jpg";
import room2Img from "@/../public/gallery/apartamenty101.jpg";
// import room3Img from "@/../public/gallery/apartamenty104.jpg";
// import room4Img from "@/../public/gallery/apartamenty105.jpg";

import room01Img from "@/../public/gallery/hotel02.jpg";
import room02Img from "@/../public/gallery/hotel03.jpg";
import room03Img from "@/../public/gallery/hotel11.jpg";
import room04Img from "@/../public/gallery/hotel07.jpg";

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
    image: house1Img,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1000",
    ],
    description:
      "Przytulny domek dla dwóch osób o powierzchni 25 m². Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę. Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę",
    capacity: "2-3",
    bedrooms: 2,
    size: 25,
    price: 255,
    features: ["Widok na jezioro", "Kominek", "Taras", "Parking", "Wi-Fi"],
    amenities: [
      "Pełne wyposażenie kuchni",
      "Prysznic",
      "Suszarka do włosów",
      // "Pościel i ręczniki",
      "Telewizor",
      "Lodówka",
      "Czajnik",
      "Kuchenka",
      // "Mikrofalówka",
      "Grill",
      "Plac zabaw",
    ],
  },
  {
    id: "2",
    name: "Domek parterowy 4-6 osobowy PREMIUM",
    type: "domek",
    image: house1Img,
    images: [
      "https://images.unsplash.com/photo-1475087542963-13ab5e611954?q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1000",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
    ],
    description:
      "Przytulny domek dla dwóch osób o powierzchni 45 m². Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę. Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę",
    capacity: "4-6",
    bedrooms: 3,
    size: 45,
    price: 390,
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
    images: [
      "https://images.unsplash.com/photo-1475087542963-13ab5e611954?q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1000",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
    ],
    description:
      "Przytulny domek dla dwóch osób o powierzchni 45 m². Wnętrze obejmuje salon z rozkładaną wersalką, aneks kuchenny oraz łazienkę. Położony w drugiej linii od jeziora zapewnia bliskość natury i kameralną atmosferę",
    capacity: "5-7",
    bedrooms: 3,
    size: 45,
    price: 390,
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
    id: "4",
    name: "Pokój 2 osobowy bez tarasu",
    type: "pokoj",
    image: room01Img,
    images: [
      "https://na-wzgorzu.pl/scripts/pokazRys.html?hotel02.jpg",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
      "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?q=80&w=1000",
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1000",
    ],
    description:
      "Przytulny pokój dwuosobowy to idealna opcja dla par lub dwóch osób szukających spokojnego wypoczynku w kameralnym budynku, zaledwie kilkanaście metrów od wyjścia na świeże powietrze. Pokój o funkcjonalnym układzie mieści się w zakresie metrażu od 12 m² do 27 m² i został w pełni umeblowany oraz wyposażony w niezbędne udogodnienia.",
    capacity: "2",
    bedrooms: 1,
    size: 12,
    price: 255,
    features: [
      "Widok na ogród",
      "Łazienka w pokoju",
      "Dostęp do tarasu",
      "Wi-Fi",
    ],
    amenities: [
      "Pościel i ręczniki",
      "Telewizor",
      "Mała lodówka",
      "Czajnik",
      "Podstawowe naczynia",
      "Wspólna kuchnia na piętrze",
    ],
  },
  {
    id: "5",
    name: "Pokój 3 osobowy z tarasem",
    type: "pokoj",
    image: room02Img,
    images: [
      "https://na-wzgorzu.pl/scripts/pokazRys.html?hotel03.jpg",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
      "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?q=80&w=1000",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1000",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000",
    ],
    description:
      "Pokój trzyosobowy to komfortowe rozwiązanie dla rodzin z dzieckiem, grupy przyjaciół lub osób szukających przestronnego miejsca do wypoczynku. Pokoje dostępne są w dwóch wariantach – z tarasem lub bez – co pozwala dopasować wybór do indywidualnych preferencji. Budynek jest kameralny, a odległość od pokoju do wyjścia głównego to zaledwie kilka kroków. Dodatkowym atutem jest zagospodarowany teren wokół obiektu.",
    capacity: "3",
    bedrooms: 1,
    size: 20,
    price: 280,
    features: ["Balkon", "Widok na jezioro", "Łazienka w pokoju", "Wi-Fi"],
    amenities: [
      "Pościel i ręczniki",
      "Telewizor",
      "Mała lodówka",
      "Czajnik",
      "Podstawowe naczynia",
      "Wspólna kuchnia na piętrze",
    ],
  },
  {
    id: "6",
    name: "Pokój 3 osobowy z bez tarasu",
    type: "pokoj",
    image: room03Img,
    images: [
      "https://na-wzgorzu.pl/scripts/pokazRys.html?hotel11.jpg",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
      "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?q=80&w=1000",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1000",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000",
    ],
    description:
      "Pokój trzyosobowy to komfortowe rozwiązanie dla rodzin z dzieckiem, grupy przyjaciół lub osób szukających przestronnego miejsca do wypoczynku. Pokoje dostępne są w dwóch wariantach – z tarasem lub bez – co pozwala dopasować wybór do indywidualnych preferencji. Budynek jest kameralny, a odległość od pokoju do wyjścia głównego to zaledwie kilka kroków. Dodatkowym atutem jest zagospodarowany teren wokół obiektu.",
    capacity: "3",
    bedrooms: 1,
    size: 20,
    price: 280,
    features: ["Balkon", "Widok na jezioro", "Łazienka w pokoju", "Wi-Fi"],
    amenities: [
      "Pościel i ręczniki",
      "Telewizor",
      "Mała lodówka",
      "Czajnik",
      "Podstawowe naczynia",
      "Wspólna kuchnia na piętrze",
    ],
  },
  {
    id: "7",
    name: "Pokój 4 osobowy bez tarasu",
    type: "pokoj",
    image: room04Img,
    images: [
      "https://na-wzgorzu.pl/scripts/pokazRys.html?hotel07.jpg",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1000",
      "https://images.unsplash.com/photo-1569152811536-fb47aced8409?q=80&w=1000",
    ],
    description:
      "Apartament to przestronny lokal z aneksem kuchennym i osobną sypialnią. Idealny dla osób szukających większej niezależności i prywatności.\n\nApartament składa się z sypialni z łóżkiem małżeńskim, salonu z rozkładaną sofą, w pełni wyposażonego aneksu kuchennego oraz łazienki z prysznicem. Goście mają również dostęp do prywatnego tarasu.",
    capacity: "4",
    bedrooms: 1,
    size: 27,
    price: 320,
    features: ["Aneks kuchenny", "Prywatny taras", "Salon", "Parking", "Wi-Fi"],
    amenities: [
      "Pełne wyposażenie kuchni",
      "Pościel i ręczniki",
      "Telewizor",
      "Lodówka",
      "Czajnik",
      "Kuchenka",
      "Mikrofalówka",
      "Meble tarasowe",
    ],
  },
];
