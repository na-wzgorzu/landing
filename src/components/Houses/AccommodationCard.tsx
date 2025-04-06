import { motion } from "framer-motion";

import { BedDouble, Users, Maximize, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Accommodation } from "@/components/Houses/types";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export const AccommodationCard = ({
  accommodation,
}: AccommodationCardProps) => {
  const { id, name, type, image, capacity, bedrooms, size, price, features } =
    accommodation;

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="h-full flex flex-col overflow-hidden border-gray-200">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge
            className="absolute top-3 left-3 bg-brand text-white hover:bg-brand"
            variant="secondary"
          >
            {type === "domek" ? "Domek" : "Pokój"}
          </Badge>
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center text-gray-600">
              <Users size={16} className="mr-2" />
              <span className="text-sm">{capacity} osób</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BedDouble size={16} className="mr-2" />
              <span className="text-sm">
                {bedrooms} {bedrooms === 1 ? "sypialnia" : "sypialnie"}
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <Maximize size={16} className="mr-2" />
              <span className="text-sm">{size} m²</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {features.slice(0, 3).map((feature, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs bg-gray-100"
              >
                {feature}
              </Badge>
            ))}
            {features.length > 3 && (
              <Badge variant="outline" className="text-xs bg-gray-100">
                +{features.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <div className="flex justify-between items-center w-full">
            <div className="text-brand font-bold">
              od {price} zł{" "}
              <span className="text-sm font-normal text-gray-500">/doba</span>
            </div>
            <Link href={`/domki/${id}`}>
              <Button size="sm" className="bg-brand hover:bg-brand/90">
                Szczegóły <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
