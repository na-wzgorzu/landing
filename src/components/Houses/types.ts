import { StaticImageData } from "next/image";

export type House = {
  name: string;
  image: StaticImageData;
  description: string;
  price: number;
  size: string;
  guests: string;
  amenities: string[];
};

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
