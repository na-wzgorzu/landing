"use client";

import { GallerySection } from "@/components/GallerySection";
import { attractions } from "@/data/attractions";
import { motion } from "framer-motion";

const images = [
  "/attractions/atrakcje06.jpg",
  "/attractions/atrakcje07.jpg",
  "/attractions/atrakcje08.jpg",
  "/attractions/atrakcje09.jpg",
  "/attractions/atrakcje10.jpg",
  "/attractions/atrakcje11.jpg",
  "/attractions/atrakcje12.jpg",
  "/attractions/atrakcje13.jpg",
  "/attractions/atrakcje14.jpg",
  "/attractions/atrakcje16.jpg",
  "/attractions/atrakcje17.jpg",
  "/attractions/atrakcje19.jpg",
  "/attractions/atrakcje20.jpg",
  "/attractions/atrakcje21.jpg",
  "/attractions/atrakcje22.jpg",
  "/attractions/atrakcje23.jpg",
  "/attractions/atrakcje24.jpg",
  "/attractions/atrakcje25.jpg",
  "/attractions/atrakcje26.jpg",
  "/attractions/atrakcje27.jpg",
  "/attractions/atrakcje28.jpg",
  "/attractions/atrakcje29.jpg",
  "/attractions/inne106.jpg",
  "/attractions/mapka1.jpg",
  "/attractions/mapka2.jpg",
  "/attractions/mapka3.jpg",
];

export const Atractions = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10">
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
              Odkryj niezwykłe miejsca w naszej okolicy, idealne dla miłośników
              natury, historii i aktywnego wypoczynku.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-xl shadow-md mb-10"
        >
          <div className="space-y-6">
            {attractions.map((item) => (
              <div key={item.id} className="border-l-4 border-brand pl-4 py-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline mt-1 inline-block"
                  >
                    Więcej informacji
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <GallerySection
          title="Galeria"
          description="Odkryj niezwykłe miejsca w naszej okolicy, idealne dla miłośników natury, historii i aktywnego wypoczynku."
          images={images}
        />

        <motion.div
          className="mt-10 p-8 bg-white rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-brand">
            Inne przydatne linki
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                href="http://www.it.brodnica.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                Informacja Turystyczna w Brodnicy
              </a>
            </li>
            <li>
              <a
                href="https://pl.wikipedia.org/wiki/Zamek_w_Golubiu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                Zamek w Golubiu-Dobrzyniu (60 km)
              </a>
            </li>
            <li>
              <a
                href="https://pl.wikipedia.org/wiki/Zamek_w_Kwidzynie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                Zamek w Kwidzynie (80 km)
              </a>
            </li>
            <li>
              <a
                href="https://pl.wikipedia.org/wiki/Biskupin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
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
