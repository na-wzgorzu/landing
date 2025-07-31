"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface AccommodationGalleryProps {
  images: string[];
  name: string;
}

export const AccommodationGallery = ({
  images,
  name,
}: AccommodationGalleryProps) => {
  const [mainImage, setMainImage] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setMainImage(index);
    setAspectRatio(null);
  };

  const isUnusualAspect =
    aspectRatio !== null && (aspectRatio > 2 || aspectRatio < 0.8);

  const imageClass = isUnusualAspect
    ? "object-contain z-1 relative"
    : "object-cover z-1 relative";

  return (
    <>
      {/* Main image with blurred background */}
      <motion.div
        className="relative w-full max-h-[500px] aspect-video mx-auto rounded-xl overflow-hidden mb-4 cursor-pointer"
        key={mainImage}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsLightboxOpen(true)}
      >
        {isUnusualAspect && (
          <img
            src={images[mainImage]}
            alt={`${name} tło`}
            className="object-cover blur-xl scale-110 absolute"
          />
        )}

        <img
          src={images[mainImage]}
          alt={name}
          className={imageClass}
          // onLoadingComplete={(img) => {
          //   const ratio = img.naturalWidth / img.naturalHeight;
          //   setAspectRatio(ratio);
          // }}
        />
      </motion.div>

      {/* Thumbnails */}
      <div className="flex flex-wrap gap-2 mb-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-24 sm:h-24 aspect-square cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
              mainImage === index
                ? "ring-2 ring-brand ring-offset-2"
                : "opacity-80 hover:opacity-100"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`${name} widok ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={mainImage}
      />
    </>
  );
};
