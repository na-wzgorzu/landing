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
  mealPlan?: string;
  highlightedNote?: string;
  features?: string[];
  amenities: string[];
}
