"use client";
import { GallerySection } from "@/components/GallerySection";
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
import gastroContent from "@/data/gastro.json";

const images = [
  "/gallery/wyzywienie01.jpg",
  "/gallery/wyzywienie02.jpg",
  "/gallery/wyzywienie03.jpg",
  "/gallery/gastronomia4.jpg",
  "/gallery/gastronomia5.jpg",
  "/gallery/gastronomia6.jpg",
];

export const Gastro = () => {
  const mealIcons = [Coffee, Soup, Utensils, Cake];

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
            {gastroContent.hero.title}
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {gastroContent.hero.subtitle}
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
            <h2 className="text-3xl font-bold text-gray-800">
              {gastroContent.kitchen.title}
            </h2>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            {gastroContent.kitchen.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Meal Times */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="text-brand mr-2 h-6 w-6" />
                <h3 className="text-xl font-bold text-gray-800">
                  {gastroContent.mealTimes.title}
                </h3>
              </div>
              <div className="space-y-4">
                {gastroContent.mealTimes.items.map((meal, index) => {
                  const MealIcon = mealIcons[index] ?? Utensils;

                  return (
                    <div
                      key={`${meal.name}-${meal.time}`}
                      className="flex items-center border-b border-gray-200 pb-3 last:border-0"
                    >
                      <MealIcon className="h-5 w-5 text-brand mr-3" />
                      <span className="text-gray-800 font-medium">
                        {meal.name}
                      </span>
                      <span className="ml-auto bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">
                        {meal.time}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                {gastroContent.mealTimes.note}
              </p>
            </div>

            {/* Meal Options */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <CalendarDays className="text-brand mr-2 h-6 w-6" />
                <h3 className="text-xl font-bold text-gray-800">
                  {gastroContent.mealOptions.title}
                </h3>
              </div>
              <p className="mb-4 text-gray-700">
                {gastroContent.mealOptions.description}
              </p>
              <ul className="space-y-2">
                {gastroContent.mealOptions.items.map((option, index) => (
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
            {gastroContent.mealDetails.title}
          </h2>

          <div className="space-y-8">
            {gastroContent.mealDetails.items.map((mealDetail) => (
              <div key={mealDetail.title}>
                <h3 className="text-xl text-brand font-bold mb-2">
                  {mealDetail.title}
                </h3>
                <p className="text-gray-700">{mealDetail.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={gastroContent.pricingCta.href}
              className="px-5 py-3 bg-brand text-white rounded-md hover:bg-brand/90 transition-colors duration-200 inline-block"
            >
              {gastroContent.pricingCta.text}
            </Link>
          </div>
        </motion.div>

        <GallerySection images={images} title={gastroContent.gallery.title} />

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
              {gastroContent.dietaryOptions.title}
            </h2>
          </div>

          <p className="text-gray-700 mb-6">
            {gastroContent.dietaryOptions.description}{" "}
            <span className="font-bold">
              {gastroContent.dietaryOptions.highlight}
            </span>
          </p>

          <div className="flex flex-wrap gap-3">
            {gastroContent.dietaryOptions.items.map((diet, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-brand/10 text-brand"
              >
                {diet}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
