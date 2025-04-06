"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Attraction {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  distance?: string;
  link?: string;
  tags: string[];
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: "Brodnickie Jezioro Strażym",
    description:
      "Główny element szlaku wodnego łączącego całe Pojezierze Brodnickie. Idealne miejsce dla wędkarzy, grzybiarzy oraz amatorów wycieczek pieszych, rowerowych i spływów kajakowych.",
    imageUrl:
      "https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    link: "https://pl.wikipedia.org/wiki/Strażym",
    tags: ["natura", "jezioro", "wypoczynek"],
  },
  {
    id: 2,
    name: "Średniowieczny Gród Rycerski Foluszek",
    description:
      "Zrekonstruowany średniowieczny gród rycerski oferujący wyjątkowe doświadczenia i podróż w czasie do epoki średniowiecza.",
    imageUrl:
      "https://images.unsplash.com/photo-1577302272688-b54c22fad351?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    distance: "4 km",
    link: "https://www.grodfoluszek.com/",
    tags: ["historia", "średniowiecze", "edukacja"],
  },
  {
    id: 3,
    name: "Miasto Brodnica",
    description:
      "Miasto organizujące różne imprezy, koncerty i festiwale. Posiada liczne zabytki: Pałac Anny Wazówny, ruiny Zamku Krzyżackiego z wieżą, spichlerz, muzeum, gotycki kościół św. Katarzyny i inne.",
    imageUrl:
      "https://images.unsplash.com/photo-1519515783129-3df051daca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    distance: "12 km",
    link: "https://pl.wikipedia.org/wiki/Brodnica",
    tags: ["miasto", "historia", "kultura"],
  },
  {
    id: 4,
    name: "Zamek Krzyżacki w Kurzętniku",
    description:
      "Ruiny średniowiecznego zamku krzyżackiego, skąd rozpościera się widok na równiny, na których w 1410 roku zbierały się wojska krzyżackie przed bitwą pod Grunwaldem.",
    imageUrl:
      "https://images.unsplash.com/photo-1560204742-a09a66c8617e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    distance: "20 km",
    link: "https://pl.wikipedia.org/wiki/Zamek_w_Kurzętniku",
    tags: ["historia", "zamek", "średniowiecze"],
  },
  {
    id: 5,
    name: "Jura Park",
    description:
      "Miejsce atrakcyjne zarówno dla dzieci i dorosłych. Główne atrakcje: ścieżka edukacyjna z modelami dinozaurów, muzeum ziemi, restauracja jaskiniowa, kino 5D, park rozrywki i plac zabaw.",
    imageUrl:
      "https://images.unsplash.com/photo-1619143921821-4bd7aa2f28bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    distance: "90 km",
    link: "https://www.juraparksolec.pl/index.php",
    tags: ["rozrywka", "dinozaury", "rodzina"],
  },
  {
    id: 6,
    name: "Skansen w Sierpcu",
    description:
      "Działający od ponad czterdziestu lat skansen, w którym można obejrzeć ponad osiemdziesiąt obiektów, takich jak zagrody chłopskie, zrekonstruowany dworek szlachecki, XVIII-wieczny kościół i inne eksponaty.",
    imageUrl:
      "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    distance: "60 km",
    link: "https://pl.wikipedia.org/wiki/Muzeum_Wsi_Mazowieckiej",
    tags: ["historia", "kultura", "muzeum"],
  },
  {
    id: 7,
    name: "Miasteczko Westernowe Kansas City",
    description:
      "Miejsce, w którym odtwarzany jest klimat dzikiego zachodu. Na gości czekają pokazy kowbojskie, inscenizacje, konkurencje zainspirowane życiem z tamtego okresu i kowbojska kuchnia.",
    imageUrl:
      "https://images.unsplash.com/photo-1551887488-b1449272c8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    distance: "60 km",
    link: "http://www.mega-park.pl/",
    tags: ["rozrywka", "western", "rodzina"],
  },
  {
    id: 8,
    name: "Toruń",
    description:
      "Miasto z piękną nadwiślańską starówką, licznymi zabytkami, planetarium, muzeami oraz słynnymi piernikami. Jedno z najchętniej odwiedzanych miast w Polsce.",
    imageUrl:
      "https://images.unsplash.com/photo-1562120679-3a7faddcca4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    distance: "60 km",
    link: "https://pl.wikipedia.org/wiki/Toruń",
    tags: ["miasto", "historia", "kultura"],
  },
];

export const Atractions: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-2">
              <span className="attraction-pill">Odkryj okolice</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-700">
              Atrakcje
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ośrodek Wypoczynkowy Na Wzgórzu jest położony na terenie
              Brodnickiego Parku Krajobrazowego nad jeziorem Strażym. Odkryj
              niezwykłe miejsca w naszej okolicy, idealne dla miłośników natury,
              historii i aktywnego wypoczynku.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="atrakcje" className="w-full">
          <div className="absolute right-0 top-0 z-1">
            <TabsList className="bg-white shadow-md">
              <TabsTrigger
                value="atrakcje"
                className="data-[state=active]:bg-brand data-[state=active]:text-white"
              >
                Atrakcje
              </TabsTrigger>
              <TabsTrigger
                value="okolica"
                className="data-[state=active]:bg-brand data-[state=active]:text-white"
              >
                Atrakcje w okolicy
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="atrakcje" className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              {attractions.map((attraction) => (
                <motion.div
                  key={attraction.id}
                  className="attraction-card overflow-hidden"
                  variants={item}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={attraction.imageUrl}
                      alt={attraction.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white text-xl font-semibold">
                        {attraction.name}
                      </h3>
                      {attraction.distance && (
                        <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                          {attraction.distance} od ośrodka
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      {attraction.tags.map((tag, index) => (
                        <span key={index} className="attraction-pill mr-2 mb-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600">{attraction.description}</p>
                    {attraction.link && (
                      <a
                        href={attraction.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-attraction hover:bg-attraction/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-attraction transition-colors duration-200"
                      >
                        Więcej informacji
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="okolica" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 text-attraction">
                Atrakcje w okolicy
              </h2>
              <p className="text-gray-600 mb-6">
                Ośrodek Wypoczynkowy Na Wzgórzu jest położony na terenie
                Brodnickiego Parku Krajobrazowego nad jeziorem Strażym, które
                stanowi główny element szlaku wodnego łączącego całe Pojezierze
                Brodnickie. Są to tereny bardzo atrakcyjne dla wędkarzy,
                grzybiarzy oraz amatorów wycieczek pieszych, rowerowych i
                spływów kajakowych ze względu na dostępność licznych tras
                prowadzących poprzez dynamicznie ukształtowany dziki teren i
                rezerwaty przyrody.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-attraction pl-4 py-2">
                  <h3 className="font-semibold text-lg">
                    Brodnickie Jezioro Strażym
                  </h3>
                  <p className="text-gray-600">
                    Główny element szlaku wodnego łączącego całe Pojezierze
                    Brodnickie. Idealne miejsce dla wędkarzy, grzybiarzy oraz
                    amatorów wycieczek pieszych, rowerowych i spływów
                    kajakowych.
                  </p>
                  <a
                    href="https://pl.wikipedia.org/wiki/Strażym"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-attraction hover:underline mt-1 inline-block"
                  >
                    Więcej informacji
                  </a>
                </div>

                <div className="border-l-4 border-attraction pl-4 py-2">
                  <h3 className="font-semibold text-lg">Rezerwaty przyrody</h3>
                  <p className="text-gray-600">
                    Tereny Brodnickiego Parku Krajobrazowego obfitują w
                    rezerwaty przyrody z unikatową roślinnością i zwierzyną.
                  </p>
                </div>

                <div className="border-l-4 border-attraction pl-4 py-2">
                  <h3 className="font-semibold text-lg">Trasy turystyczne</h3>
                  <p className="text-gray-600">
                    Liczne szlaki piesze, rowerowe oraz trasy kajakowe pozwalają
                    na aktywne spędzenie czasu w otoczeniu natury.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-attraction">
                  Informacje praktyczne
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    W recepcji ośrodka można uzyskać mapy okolicznych szlaków
                    turystycznych
                  </li>
                  <li>Możliwość wypożyczenia rowerów (za dodatkową opłatą)</li>
                  <li>
                    Organizacja spływów kajakowych (sezonowo, za dodatkową
                    opłatą)
                  </li>
                  <li>Miejsca na ognisko i grilla na terenie ośrodka</li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          className="mt-16 p-8 bg-white rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-attraction">
            Inne przydatne linki
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                href="http://www.it.brodnica.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-attraction hover:underline"
              >
                Informacja Turystyczna w Brodnicy
              </a>
            </li>
            <li>
              <a
                href="https://pl.wikipedia.org/wiki/Zamek_w_Golubiu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-attraction hover:underline"
              >
                Zamek w Golubiu-Dobrzyniu (60 km)
              </a>
            </li>
            <li>
              <a
                href="https://pl.wikipedia.org/wiki/Zamek_w_Kwidzynie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-attraction hover:underline"
              >
                Zamek w Kwidzynie (80 km)
              </a>
            </li>
            <li>
              <a
                href="https://pl.wikipedia.org/wiki/Biskupin_stanowisko_archeologiczne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-attraction hover:underline"
              >
                Osada Biskupin (120 km)
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
