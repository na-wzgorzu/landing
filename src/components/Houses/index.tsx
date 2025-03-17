import { Button } from "@/components/ui/button";
import { VerticalDivider } from "@/components/VerticalDivider";
import { Calendar1Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

const housesDetails = {
  header: "Domek parterowy 2-3 osobowy",
  description: ` Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.`,
};

export const HousesPage = () => {
  return (
    <div className="p-8 flex flex-col gap-6">
      <House {...housesDetails} />

      <VerticalDivider color={"black"} />

      <House {...housesDetails} isReversedContent />
    </div>
  );
};

const House = ({
  header,
  description,
  isReversedContent = false,
}: {
  header: string;
  description: string;
  isReversedContent?: boolean;
}) => {
  return (
    <div
      className={`flex gap-4 w-full ${isReversedContent && "flex-row-reverse"}`}
    >
      <HousesGallery />
      <div className="w-full">
        <h2 className="text-3xl p-4 bg-brand text-white">{header}</h2>
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
  );
};

const HousesGallery = () => {
  return (
    <div className="min-h-[400px] bg-gray-400 w-full flex items-center justify-center text-white font-bold">
      Galeria
    </div>
  );
};
