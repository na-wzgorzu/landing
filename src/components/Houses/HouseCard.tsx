import Image from "next/image";
import { Expand, User } from "lucide-react";
import { House } from "@/components/Houses/types";
import { ButtonUnderline } from "@/components/ButtonUnderline";

export const HouseCard = ({
  description,
  guests,
  image,
  name,
  price,
  size,
}: House) => {
  return (
    <div className="flex flex-col md:flex-row font-mono mx-auto">
      <div className="md:max-w-[250px] min-w-[180px] w-full flex flex-col justify-evenly items-center gap-6 bg-brand text-white p-4">
        <div className="text-center">
          <h3 className="text-xl uppercase">{name}</h3>

          {/* underline */}
          <div className="h-px bg-white w-1/2 mx-auto" />
        </div>

        <div className="text-justify text-sm font-sans">{description}</div>

        <p className="mx-auto">
          Już od <span className="font-semibold">{price} zł</span> / noc
        </p>

        <ButtonUnderline>Rezerwuj</ButtonUnderline>
      </div>

      {/* Image wrapper to ensure responsiveness */}
      <div className="relative w-full flex items-center">
        <Image
          src={image}
          alt="house"
          className="w-full h-full max-h-[425px] object-cover"
        />
      </div>

      <div className="md:max-w-[250px] min-w-[180px] w-full items-center flex flex-col justify-evenly gap-6 bg-brand text-white p-4">
        <ButtonUnderline>Galeria</ButtonUnderline>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <User />
            {guests} os.
          </div>
          <div className="flex gap-2 items-center">
            <Expand />
            {size}m²
          </div>
        </div>

        <ButtonUnderline>Zobacz wszystkie</ButtonUnderline>
      </div>
    </div>
  );
};
