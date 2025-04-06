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

export type Accommodation = {
  id: string;
  name: string;
  type: "domek" | "pokoj";
  image: string;
  images: string[];
  description: string;
  capacity: number;
  bedrooms: number;
  size: number;
  price: number;
  features: string[];
  amenities: string[];
};
