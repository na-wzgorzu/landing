import {
  Wifi,
  ParkingCircle,
  BedDouble,
  Tv,
  Coffee,
  Utensils,
  Dog,
  Baby,
  ShowerHead,
  Bath,
} from "lucide-react";
import { ReactNode } from "react";
import { PiHairDryerBold } from "react-icons/pi";

export const amenitiesMap: Record<
  string,
  { name: string; icon: ReactNode; header?: string }
> = {
  wifi: { name: "WiFi", icon: <Wifi />, header: "Internet" },
  parking: { name: "Parking", icon: <ParkingCircle />, header: "Prywatny" },
  bigBed: { name: "Podwójne", icon: <BedDouble />, header: "Łóżko" },
  tv: { name: "Telewizor", icon: <Tv /> },
  kettle: { name: "Czajnik", icon: <Coffee /> },
  breakfast: { name: "Śniadanie", icon: <Utensils /> },
  dryer: { name: "Suszarka", icon: <PiHairDryerBold /> },
  animal: { name: "Zwierzęta", icon: <Dog />, header: "Dozwolone" },
  playground: { name: "Plac zabaw", icon: <Baby /> },
  shower: { name: "Prysznicem", icon: <ShowerHead />, header: "Łazienka z" },
  bath: { name: "Wanną", icon: <Bath />, header: "Łazienka z" },
};

export function getBedroomLabel(bedrooms: string | number): string {
  if (typeof bedrooms === "number") {
    console.log("🚀 :21 bedrooms:", bedrooms);

    return bedrooms === 1 ? "sypialnia" : "sypialnie";
  }

  return String(bedrooms);
}
