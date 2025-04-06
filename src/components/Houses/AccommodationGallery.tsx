"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AccommodationGalleryProps {
  images: string[];
  name: string;
}

export const AccommodationGallery = ({
  images,
  name,
}: AccommodationGalleryProps) => {
  const [mainImage, setMainImage] = useState(0);

  // Handler for when a thumbnail is clicked
  const handleThumbnailClick = (index: number) => {
    setMainImage(index);
  };

  return (
    <>
      {/* Main image */}
      <motion.div
        className="rounded-xl overflow-hidden mb-4 h-96"
        key={mainImage}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={images[mainImage]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Thumbnail gallery */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden h-24 cursor-pointer transition-all duration-200 ${
              mainImage === index
                ? "ring-2 ring-brand ring-offset-2"
                : "opacity-80 hover:opacity-100"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image}
              alt={`${name} widok ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};
