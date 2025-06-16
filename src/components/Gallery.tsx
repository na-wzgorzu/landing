"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  images: string[];
};

export const Gallery = ({ images }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setOpenIndex(index)}
          >
            <motion.img
              src={src}
              alt={`Zdjęcie gastronomii ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        slides={images.map((src) => ({ src }))}
        index={openIndex ?? 0}
      />
    </>
  );
};
