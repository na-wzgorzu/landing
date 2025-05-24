import Image from "next/image";
import { Expand, User } from "lucide-react";
import { Accommodation } from "@/components/Houses/types";
import { ButtonUnderline } from "@/components/ButtonUnderline";
import Link from "next/link";

export const HouseCard = ({
  description,
  capacity,
  image,
  name,
  size,
  type,
}: Accommodation) => {
  return (
    <div className="flex flex-col md:flex-row font-mono mx-auto bg-blue-100 min-h-[411px]">
      <div className="md:max-w-[250px] min-w-[180px] w-full flex flex-col justify-evenly items-center gap-6 bg-brand text-white p-4">
        <div className="text-center">
          <h3 className="text-xl uppercase">{name}</h3>

          {/* underline */}
          <div className="h-px bg-white w-1/2 mx-auto" />
        </div>

        <div className="text-justify text-sm font-sans line-clamp-5 md:line-clamp-[8]">
          {description}
        </div>

        <Link href="/rezerwacja">
          <ButtonUnderline>Rezerwuj</ButtonUnderline>
        </Link>
      </div>

      {/* Image wrapper to ensure responsiveness */}
      <div className="relative w-full flex items-center">
        <Image
          src={image}
          alt="house"
          className="w-full h-[268px] md:h-full md:max-h-[425px] object-cover"
        />
      </div>

      <div className="md:max-w-[250px] min-w-[180px] w-full items-center flex flex-col justify-evenly gap-6 bg-brand text-white p-4">
        <Link href="/galeria">
          <ButtonUnderline>Galeria</ButtonUnderline>
        </Link>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <User />
            {capacity} os.
          </div>
          <div className="flex gap-2 items-center">
            <Expand />
            {size}m²
          </div>
        </div>

        <Link
          href={
            type.toLocaleLowerCase().includes("domek") ? "/domki" : "/pokoje"
          }
        >
          <ButtonUnderline>Zobacz wszystkie</ButtonUnderline>
        </Link>
      </div>
    </div>
  );
};
