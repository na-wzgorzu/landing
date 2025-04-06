"use client";
import { motion } from "framer-motion";
import {
  Utensils,
  Clock,
  CalendarDays,
  Coffee,
  Soup,
  Cake,
  SaladIcon,
} from "lucide-react";
import Link from "next/link";

export const Gastro = () => {
  const mealTimes = [
    { name: "Śniadanie", time: "9:00", icon: Coffee },
    { name: "Obiad", time: "14:00", icon: Soup },
    { name: "Obiadokolacja", time: "17:00", icon: Utensils },
    { name: "Kolacja", time: "19:00", icon: Cake },
  ];

  const mealOptions = [
    "Śniadania + obiady",
    "Śniadania + obiadokoalcje",
    "Obiady + koalcje",
    "Śniadania + obiady + koalcje",
    "Tylko obiady (tylko dla domków)",
    "Tylko obiadokolacje (tylko dla domków)",
  ];

  const dietaryOptions = ["Wegetariańskie", "Wegańskie", "Bezglutenowe"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="w-full bg-brand py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Usługi Gastronomiczne
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Smaczne, lekkie i pożywne jedzenie to ważny element udanego
            wypoczynku
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <Utensils className="text-brand mr-3 h-8 w-8" />
            <h2 className="text-3xl font-bold text-gray-800">Nasza Kuchnia</h2>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Ośrodek posiada pełne zaplecze gastronomiczne i jadalnię. Zdajemy
            sobie sprawę, że smaczne, lekkie i pożywne jedzenie jest ważnym
            elementem udanego wypoczynku. U nas jedzenie jest zawsze
            przyrządzane ze świeżych produktów. Staramy się o wysoką jakość, a
            nasza kuchnia otrzymuje wiele pochwał.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Meal Times */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="text-brand mr-2 h-6 w-6" />
                <h3 className="text-xl font-bold text-gray-800">
                  Godziny posiłków
                </h3>
              </div>
              <div className="space-y-4">
                {mealTimes.map((meal, index) => (
                  <div
                    key={index}
                    className="flex items-center border-b border-gray-200 pb-3 last:border-0"
                  >
                    <meal.icon className="h-5 w-5 text-brand mr-3" />
                    <span className="text-gray-800 font-medium">
                      {meal.name}
                    </span>
                    <span className="ml-auto bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">
                      {meal.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Obiad i obiadokolacja to u nas ten sam posiłek, różni się
                jedynie godziną podania.
              </p>
            </div>

            {/* Meal Options */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <CalendarDays className="text-brand mr-2 h-6 w-6" />
                <h3 className="text-xl font-bold text-gray-800">
                  Opcje wyżywienia
                </h3>
              </div>
              <p className="mb-4 text-gray-700">
                W okresie od początku czerwca do połowy września sprzedajemy
                pobyty z wyżywieniem. Poza sezonem w zależności od okresu
                możliwe są inne opcje.
              </p>
              <ul className="space-y-2">
                {mealOptions.map((option, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-brand mr-2"></span>
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Meal Descriptions */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
            Szczegóły posiłków
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-brand font-bold mb-2">Śniadania</h3>
              <p className="text-gray-700">
                Śniadania serwowane są częściowo na szwedzkim stole (kawa,
                herbata, mleko, dżemy, płatki, sałatki, itp.) oraz na
                przypisanych do domków/pokoi/apartamentów stolikach (danie
                ciepłe, półmiski wędlin i serów, bułeczki, chleb, masło).
              </p>
            </div>

            <div>
              <h3 className="text-xl text-brand font-bold mb-2">
                Obiad i obiadokolacja
              </h3>
              <p className="text-gray-700">
                Obiad i obiadokolacja to posiłki trzydaniowe - podawane do
                stolika, zupy w wazach, mięsiwa, ziemniaki i sałatki na
                półmiskach, soki w dzbankach oraz deser.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-brand font-bold mb-2">Kolacje</h3>
              <p className="text-gray-700">
                Kolacje serwujemy częściowo na bufecie oraz na stoliki.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Dietary Options */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <SaladIcon className="text-brand mr-3 h-7 w-7" />
            <h2 className="text-2xl font-bold text-gray-800">
              Diety specjalne
            </h2>
          </div>

          <p className="text-gray-700 mb-6">
            Oferujemy posiłki dostosowane do różnych preferencji żywieniowych.
            Wszystkie opcje należy zgłaszać przed przyjazdem, najlepiej na
            etapie rezerwacji.
          </p>

          <div className="flex flex-wrap gap-3">
            {dietaryOptions.map((diet, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-brand/10 text-brand"
              >
                {diet}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Back to Home */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="px-5 py-3 bg-brand text-white rounded-md hover:bg-brand/90 transition-colors duration-200 inline-block"
          >
            Powrót do strony głównej
          </Link>
        </div>
      </div>
    </div>
  );
};
