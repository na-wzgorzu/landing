import { StaticImageData } from "next/image";

export type House = {
  name: string;
  image: StaticImageData;
  description: string;
  price: number;
  size: number;
  guests: string;
  amenities: string[];
};
