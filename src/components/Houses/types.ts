import { StaticImageData } from "next/image";

export interface Accommodation {
  id: string;
  name: string;
  type: "domek" | "pokoj";
  image: StaticImageData;
  images: StaticImageData[];
  description: string;
  capacity: string;
  bedrooms: number | string;
  size: number;
  features?: string[];
  amenities: string[];
}
