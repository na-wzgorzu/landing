"use client";
import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = ["Domki", "Pokoje", "Atrakcje i okolica"];

const images: Record<string, string[]> = {
  Domki: [
    "/hero.avif",
    "/gallery/domki02.jpg",
    "/gallery/domki12.jpg",
    "/gallery/domki100.jpg",
    "/gallery/domki01.jpg",
    "/gallery/domki104.jpg",
    "/gallery/apartamenty103.jpg",
    "/gallery/build-1.jpg",
    "/gallery/domki15.jpg",
    "/gallery/domki105.jpg",
    "/gallery/domki102.jpg",
    "/gallery/domki106.jpg",
    "/gallery/domki11.jpg",
    "/gallery/apartamenty105.jpg",
    "/gallery/apartamenty06.jpg",
    "/gallery/apartamenty04.jpg",
    "/gallery/domki13.jpg",
    "/gallery/apartamenty104.jpg",
    "/gallery/apartamenty101.jpg",
    "/gallery/apartamenty100.jpg",
    "/gallery/apartamenty102.jpg",
  ],
  Pokoje: [
    "/gallery/hotel11.jpg",
    "/gallery/hotel12.jpg",
    "/gallery/hotel01.jpg",
    "/gallery/hotel02.jpg",
    "/gallery/hotel08.jpg",
    "/gallery/pokój_07.jpg",
    "/gallery/hotel03.jpg",
    "/gallery/hotel06.jpg",
    "/gallery/hotel07.jpg",
    "/gallery/pokój_06.jpg",
    "/gallery/pokój_17.jpg",
    "/gallery/pokój_05.jpg",
    "/gallery/hotel13.jpg",
  ],
  "Atrakcje i okolica": [
    "/gallery/inne103.jpg",
    "/gallery/inne104.jpg",
    "/gallery/about-1.jpg",
    "/gallery/about-2.jpg",
    "/gallery/bridge.jpg",
    "/gallery/kayak.jpg",
    "/gallery/inne17.jpg",
    "/gallery/inne105.jpg",
    "/gallery/inne106.jpg",
    "/gallery/inne109.jpg",
    "/gallery/inne110.jpg",
    "/gallery/inne115.jpg",
    "/gallery/inne116.jpg",
    "/gallery/inne117.jpg",
    "/gallery/domki107.jpg",
    "/gallery/hotel14.jpg",

    "/gallery/inne1.jpg",
    "/gallery/inne2.jpg",
    "/gallery/inne3.jpg",
    "/gallery/inne4.jpg",
    "/gallery/inne5.jpg",
    "/gallery/inne6.jpg",
    "/gallery/inne7.jpg",
    "/gallery/inne8.jpg",
    "/gallery/inne9.jpg",
    "/gallery/inne10.jpg",
    "/gallery/inne11.jpg",
    "/gallery/inne12.jpg",
    "/gallery/inne13.jpg",
    "/gallery/inne14.jpg",

    "/gallery/grzyby01.jpg",
    "/gallery/grzyby03.jpg",
    "/gallery/grzyby05.jpg",
    "/gallery/grzyby06.jpg",

    "/gallery/gal01.jpg",
    "/gallery/gal02.jpg",

    "/gallery/ryby01.jpg",
    "/gallery/ryby02.jpg",
    "/gallery/ryby03.jpg",
  ],
};

export function GalleryMasonry() {
  const [selectedCategory, setSelectedCategory] = useState("Domki");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className="p-4 w-full">
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <Button
            variant={"green"}
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xs transition-colors ${
              selectedCategory === category ? "" : "opacity-75"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      <Masonry
        breakpointCols={{ default: 3, 768: 2, 480: 1 }}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {images[selectedCategory].map((src, index) => (
          <Image
            key={src + index + selectedCategory}
            src={src}
            alt="Gallery item"
            width={300}
            height={200}
            className="w-full rounded-lg cursor-pointer"
            onClick={() => setLightboxIndex(index)}
          />
        ))}
      </Masonry>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={images[selectedCategory].map((src) => ({ src }))}
        index={lightboxIndex}
      />
    </div>
  );
}
