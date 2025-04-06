import { Title } from "@/components/Title";
import Image from "next/image";
import React from "react";
import { ButtonUnderline } from "@/components/ButtonUnderline";
import Link from "next/link";

export const FoodService = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-lg gap-6 text-gray-700 px-4">
      <Title title="Gastronomia" />

      <p>
        Nasz ośrodek oferuje pełne zaplecze gastronomiczne i komfortową
        jadalnię. Wiemy, że smaczne, lekkie i pożywne jedzenie to kluczowy
        element udanego wypoczynku. Wszystkie posiłki przygotowujemy ze świeżych
        produktów, dbając o wysoką jakość i różnorodność smaków.
      </p>

      <div className="flex gap-6 flex-col sm:flex-row">
        <div className="flex-2">
          <Image
            src="/gallery/wyzywienie02.jpg"
            width={400}
            height={300}
            alt="Jadalnia z widokiem na jezioro"
            className="bg-cover object-top w-full object-cover rounded-md"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Nasza kuchnia</h4>
          <p>
            W sezonie (czerwiec – połowa września) oferujemy pobyty z
            wyżywieniem: śniadania, obiady, obiadokolacje i kolacje, w różnych
            konfiguracjach. W domkach można dodatkowo zamówić same obiady lub
            obiadokolacje. Poza sezonem dostępność posiłków ustalana jest
            indywidualnie.
          </p>

          <Link href={"/gastronomia"} className="cursor-pointer">
            <ButtonUnderline color="black">Dowiedz się więcej</ButtonUnderline>
          </Link>
        </div>
      </div>
    </div>
  );
};
