export interface Accommodation {
  id: string;
  name: string;
  type: "domek" | "pokoj";
  image: string;
  images: string[];
  description: string;
  capacity: string;
  bedrooms: number | string;
  size: number;
  features?: string[];
  amenities: string[];
}
