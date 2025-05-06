// import { motion } from "framer-motion";

import { BedDouble, Users, Maximize, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { accommodationList } from "@/data/houses";
import Link from "next/link";
import Image from "next/image";

type Props = {
  type: "domek" | "pokoj";
  descriptionComponent?: React.ReactNode;
};

export const AccommodationList = ({ type, descriptionComponent }: Props) => {
  const typeText = type === "domek" ? "Domki" : "Pokoje";
  return (
    <div className="min-h-screen max-w-screen-lg py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-brand">
          {typeText}
        </h1>

        {descriptionComponent}

        <div className="space-y-6">
          {accommodationList
            .filter((room) => room.type === type)
            .map((accommodation) => (
              <div
                key={accommodation.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Image */}
                  <div className="md:w-1/3 h-64 md:h-auto relative">
                    <Image
                      src={accommodation.image}
                      alt={accommodation.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge
                      className="absolute top-3 left-3 bg-brand text-white hover:bg-brand"
                      variant="secondary"
                    >
                      {accommodation.type === "domek" ? "Domek" : "Pokój"}
                    </Badge>
                  </div>

                  {/* Right side - Details */}
                  <div className="md:w-2/3 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {accommodation.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {accommodation.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Users size={16} className="mr-2" />
                        <span className="text-sm">
                          {accommodation.capacity} osoby
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <BedDouble size={16} className="mr-2" />
                        <span className="text-sm">
                          {accommodation.bedrooms}{" "}
                          {accommodation.bedrooms === 1
                            ? "sypialnia"
                            : "sypialnie"}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Maximize size={16} className="mr-2" />
                        <span className="text-sm">{accommodation.size} m²</span>
                      </div>
                    </div>

                    {accommodation.features && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {accommodation.features
                          .slice(0, 3)
                          .map((feature, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs bg-gray-100"
                            >
                              {feature}
                            </Badge>
                          ))}
                        {accommodation.features.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-gray-100"
                          >
                            +{accommodation.features.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}

                    <div className="mt-auto flex justify-end items-center">
                      <Link href={`/domki/${accommodation.id}`}>
                        <Button
                          size="sm"
                          className="bg-brand hover:bg-brand/90"
                        >
                          Szczegóły <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
