"use client";
import { Gallery } from "@/components/Gallery";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  title: string;
  images: string[];
  description?: string;
};

export const GallerySection = ({ description, images, title }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
        {title}
      </h2>
      {description && <p className="text-gray-700 mb-6">{description}</p>}

      <Gallery images={images} />

      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        slides={images.map((src) => ({ src }))}
        index={openIndex ?? 0}
      />
    </motion.div>
  );
};
