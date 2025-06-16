import { GalleryMasonry } from "@/components/GalleryMasonry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Galeria",
};

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <GalleryMasonry />
    </div>
  );
}
