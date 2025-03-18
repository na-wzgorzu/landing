import { Button } from "@/components/ui/button";
import { VerticalDivider } from "@/components/VerticalDivider";
import { houses } from "@/data/houses";
import { Calendar1Icon, Expand, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { House } from "@/components/Houses/types";
import { amenitiesMap } from "@/components/Houses/tools";

export const HousesPage = () => {
  return (
    <div className="p-8 flex flex-col gap-10">
      {houses.map((house, index) => (
        <>
          {index % 2 !== 0 && <VerticalDivider color={"black"} />}
          <HouseDetails
            key={index}
            {...house}
            isReversedContent={index % 2 !== 0}
          />
        </>
      ))}
    </div>
  );
};

const HouseDetails = ({
  name,
  description,
  amenities,
  guests,
  size,
  isReversedContent = false,
}: House & {
  isReversedContent?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div
        className={`flex gap-4 w-full ${
          isReversedContent && "flex-row-reverse"
        }`}
      >
        <HousesGallery />
        <div className="w-full">
          <h2 className="text-3xl p-4 bg-brand text-white">{name}</h2>
          <p className="py-4 text-justify">{description}</p>

          <Link href="/rezerwacja">
            <Button
              variant={"green"}
              className="text-lg rounded-xs p-6 cursor-pointer"
            >
              <Calendar1Icon className="size-6" />
              Zarezerwuj termin
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-4 border border-brand rounded-lg grid grid-cols-4 gap-4">
        <HouseAmenitiesItem
          icon={<User />}
          name={guests}
          header="Ilość miejsc"
        />

        <HouseAmenitiesItem
          icon={<Expand />}
          name={`${size} m²`}
          header="Powierzchnia"
        />

        {amenities.map((content, index) => {
          return <HouseAmenitiesItem key={index} {...amenitiesMap[content]} />;
        })}
      </div>
    </div>
  );
};

const HouseAmenitiesItem = ({
  name: content,
  header,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
  header?: string;
}) => {
  return (
    <div className="flex gap-2 [&>svg]:size-8 items-center">
      {icon}

      <div className="flex flex-col">
        {header && <span className="text-xs">{header}</span>}
        <span className="text-lg font-semibold leading-5">{content}</span>
      </div>
    </div>
  );
};

const HousesGallery = () => {
  return (
    <div className="min-h-[400px] bg-gray-400 w-full flex items-center justify-center text-white font-bold">
      Galeria
    </div>
  );
};
