import { Title } from "@/components/Title";
import Image from "next/image";
import React from "react";
import landscapeImg from "@/assets/about-2.jpg";
import { ButtonUnderline } from "@/components/ButtonUnderline";

export const Attractions = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-lg gap-6 text-gray-700 px-4">
      <Title title="Zapraszamy" />

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="flex gap-6 flex-col sm:flex-row">
        <div className="flex-2">
          <Image src={landscapeImg} alt="Landscape on the lake" />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Atrakcje</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum has been the
            industry standard dummy text ever since the 1500s, when an unknown.
          </p>

          <ButtonUnderline color="black">Czytaj więcej</ButtonUnderline>
        </div>
      </div>
    </div>
  );
};
