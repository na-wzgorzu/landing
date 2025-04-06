import { Accommodation, House } from "@/components/Houses/types";
import house1Img from "@/assets/hero.jpg";
import room1Img from "@/../public/gallery/apartamenty100.jpg";
import room2Img from "@/../public/gallery/apartamenty101.jpg";

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
    id: "domek-1",
    name: "Domek Leśny",
    type: "domek",
    image:
      "https://images.unsplash.com/photo-1587061949555-2e4539024ee0?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1587061949555-2e4539024ee0?q=80&w=1000",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1000",
    ],
    description:
      "Domek Leśny to komfortowy obiekt położony wśród sosen z pięknym widokiem na jezioro. Domek jest w pełni wyposażony i idealny dla rodzin szukających odpoczynku na łonie natury.\n\nWnętrze wykończone jest w drewnie, co tworzy ciepłą i przytulną atmosferę. Dwie osobne sypialnie zapewniają prywatność, a duży salon z kominkiem to idealne miejsce na wspólne wieczory. Z tarasu roztacza się widok na jezioro.",
    capacity: 6,
    bedrooms: 2,
    size: 65,
    price: 450,
    features: ["Widok na jezioro", "Kominek", "Taras", "Parking", "Wi-Fi"],
    amenities: [
      "Pełne wyposażenie kuchni",
      "Pościel i ręczniki",
      "Telewizor",
      "Lodówka",
      "Czajnik",
      "Kuchenka",
      "Mikrofalówka",
      "Grill",
      "Meble ogrodowe",
    ],
  },
  {
    id: "domek-2",
    name: "Domek Sosnowy",
    type: "domek",
    image:
      "https://images.unsplash.com/photo-1475087542963-13ab5e611954?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1475087542963-13ab5e611954?q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1000",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
    ],
    description:
      "Domek Sosnowy to przestronny domek otoczony sosnowym lasem. Idealny dla większych rodzin lub grup przyjaciół. Posiada trzy sypialnie, dwie łazienki i przestronny salon.\n\nW pełni wyposażona kuchnia pozwala na samodzielne przygotowywanie posiłków. Domek posiada również zadaszony taras z grillem, gdzie można spędzać wieczory na świeżym powietrzu.",
    capacity: 8,
    bedrooms: 3,
    size: 80,
    price: 550,
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
    id: "domek-3",
    name: "Domek Brzozowy",
    type: "domek",
    image:
      "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?q=80&w=1000",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
      "https://images.unsplash.com/photo-1534595038511-9f219fe0c979?q=80&w=1000",
      "https://images.unsplash.com/photo-1581404457836-5dc69a857a76?q=80&w=1000",
    ],
    description:
      "Domek Brzozowy to przytulny obiekt z widokiem na las i łąkę. Doskonały dla par lub małych rodzin ceniących spokój i prywatność.\n\nDomek jest wyposażony w jedną sypialnię, łazienkę, aneks kuchenny oraz salon z rozkładaną sofą. Przed domkiem znajduje się weranda z miejscem do wypoczynku na świeżym powietrzu.",
    capacity: 4,
    bedrooms: 1,
    size: 40,
    price: 350,
    features: [
      "Widok na las",
      "Weranda",
      "Spokojne otoczenie",
      "Parking",
      "Wi-Fi",
    ],
    amenities: [
      "Aneks kuchenny",
      "Pościel i ręczniki",
      "Telewizor",
      "Lodówka",
      "Czajnik",
      "Kuchenka",
      "Grill",
      "Meble ogrodowe",
    ],
  },
  {
    id: "pokoj-1",
    name: "Pokój Słoneczny",
    type: "pokoj",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
      "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?q=80&w=1000",
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=1000",
    ],
    description:
      "Pokój Słoneczny to jasny i przytulny pokój hotelowy z widokiem na ogród. Pokój jest idealny dla par szukających komfortowego zakwaterowania.\n\nWyposażony jest w wygodne łóżko małżeńskie, łazienkę z prysznicem, telewizor oraz małą lodówkę. Goście mają również dostęp do wspólnego tarasu.",
    capacity: 2,
    bedrooms: 1,
    size: 20,
    price: 180,
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
    id: "pokoj-2",
    name: "Pokój Rodzinny z balkonem",
    type: "pokoj",
    image:
      "https://images.unsplash.com/photo-1576675784201-0e142b423952?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1576675784201-0e142b423952?q=80&w=1000",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
      "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?q=80&w=1000",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1000",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000",
    ],
    description:
      "Pokój Rodzinny to przestronny pokój z balkonem i widokiem na jezioro. Idealny dla rodzin z dziećmi.\n\nPokój jest wyposażony w łóżko małżeńskie oraz dwa łóżka pojedyncze, łazienkę z prysznicem, telewizor oraz małą lodówkę. Z balkonu roztacza się piękny widok na jezioro i okoliczne lasy.",
    capacity: 4,
    bedrooms: 1,
    size: 30,
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
    id: "pokoj-3",
    name: "Apartament z aneksem kuchennym",
    type: "pokoj",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1000",
      "https://images.unsplash.com/photo-1569152811536-fb47aced8409?q=80&w=1000",
    ],
    description:
      "Apartament to przestronny lokal z aneksem kuchennym i osobną sypialnią. Idealny dla osób szukających większej niezależności i prywatności.\n\nApartament składa się z sypialni z łóżkiem małżeńskim, salonu z rozkładaną sofą, w pełni wyposażonego aneksu kuchennego oraz łazienki z prysznicem. Goście mają również dostęp do prywatnego tarasu.",
    capacity: 3,
    bedrooms: 1,
    size: 35,
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
