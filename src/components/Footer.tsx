import { Logo } from "@/assets/logo";
import { VerticalDivider } from "@/components/VerticalDivider";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-brand flex text-white font-medium p-4 justify-around items-center flex-col md:flex-row">
      <div className="text-center">
        <p>OŚRODEK WYPOCZYNKOWY {'"NA WZGÓRZU"'}</p>
        <p>Gaj-Grzmięca 30a, 87-312 Pokrzydowo</p>
        <p>tel. (56) 4939153</p>
        <p>na-wzgorzu@na-wzgorzu.pl</p>
      </div>

      <div className="md:hidden w-[80%]">
        <VerticalDivider type="horizontal" />
      </div>

      <div className="hidden md:block w-fit">
        <VerticalDivider />
      </div>

      <div className="flex flex-col gap-2">
        <Link href="#">O nas</Link>
        <Link href="#">Domki</Link>
        <Link href="#">Atrakcje</Link>
        <Link href="#">Galeria</Link>
        <Link href="#">Kontakt</Link>
      </div>

      <div className="md:hidden w-[80%]">
        <VerticalDivider type="horizontal" />
      </div>

      <div className="hidden md:block w-fit">
        <VerticalDivider />
      </div>

      <div className="text-white">
        <Logo width={150} height={150} className="max-w-40" />
      </div>
    </div>
  );
};
