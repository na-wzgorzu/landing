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
        Ośrodek posiada pełne zaplecze gastronomiczne i jadalnię. Wiemy, że
        smaczne, lekkie i pożywne jedzenie to kluczowy element udanego
        wypoczynku. Posiłki przygotowujemy ze świeżych produktów, dbając o
        wysoką jakość i różnorodność smaków.
      </p>

      <div className="flex gap-6 flex-col sm:flex-row">
        <div className="flex-2">
          <Image
            src="/gallery/wyzywienie02-horizontal.png"
            width={650}
            height={360}
            alt="Jadalnia z widokiem na jezioro"
            className="bg-cover object-center w-full object-cover rounded-md aspect-video"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 w-full">
          <h4 className="font-semibold text-lg">Nasza kuchnia</h4>
          <p>
            Od początku czerwca do końca pierwszego tygodnia września oferujemy
            pobyty z wyżywieniem. W ścisłym sezonie (lipiec - sierpień)
            serwujemy: śniadania, obiady, obiadokolacje i kolacje, w wariantach
            podanych na kolejnej stronie. W pozostałych okresach możliwe są inne
            opcje, w zależności od dostępności.
          </p>

          <Link href={"/gastronomia"} className="cursor-pointer">
            <ButtonUnderline color="black">Dowiedz się więcej</ButtonUnderline>
          </Link>
        </div>
      </div>
    </div>
  );
};
