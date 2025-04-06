import {
  ArrowLeft,
  Users,
  BedDouble,
  Maximize,
  Coffee,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { accommodationList } from "@/data/houses";
import Link from "next/link";
import { AccommodationGallery } from "@/components/Houses/AccommodationGallery";

type Props = {
  id: string;
};

export const AccommodationDetails = ({ id }: Props) => {
  const accommodation = accommodationList.find((acc) => acc.id === id);

  if (!accommodation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Nie znaleziono noclegu</h1>
        <Link href="/domki">
          <Button className="bg-attraction hover:bg-attraction/90">
            <ArrowLeft size={16} className="mr-2" /> Wróć do listy noclegów
          </Button>
        </Link>
      </div>
    );
  }

  const {
    name,
    type,
    images,
    description,
    capacity,
    bedrooms,
    size,
    price,
    features,
    amenities,
  } = accommodation;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb and back button */}
        <div className="mb-6">
          <Link
            href="/domki"
            className="inline-flex items-center text-attraction hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" /> Wróć do listy noclegów
          </Link>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Images and info */}
          <div className="lg:col-span-2">
            {/* Gallery Component */}
            <AccommodationGallery images={images} name={name} />

            {/* Description */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Opis</h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Udogodnienia</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={16} className="text-attraction mr-2" />
                      <span className="text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Summary and booking */}
          <div>
            <Card className="sticky top-6">
              <CardContent className="pt-6">
                <h1 className="text-2xl font-bold mb-2 text-gray-800">
                  {name}
                </h1>
                <Badge
                  className="mb-4 bg-attraction text-white hover:bg-attraction"
                  variant="secondary"
                >
                  {type === "domek" ? "Domek" : "Pokój"}
                </Badge>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-2 text-attraction" />
                    <span>{capacity} osób</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BedDouble size={18} className="mr-2 text-attraction" />
                    <span>
                      {bedrooms} {bedrooms === 1 ? "sypialnia" : "sypialnie"}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Maximize size={18} className="mr-2 text-attraction" />
                    <span>{size} m²</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Coffee size={18} className="mr-2 text-attraction" />
                    <span>Opcja z wyżywieniem</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold mb-2">Wyposażenie:</h3>
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-gray-100"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Cena za dobę</p>
                      <p className="text-3xl font-bold text-attraction">
                        {price} zł
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">Minimum 2 noce</p>
                  </div>

                  <Button className="w-full bg-attraction hover:bg-attraction/90 py-6 text-base">
                    Zarezerwuj teraz
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  Wymagana przedpłata 30% wartości pobytu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
