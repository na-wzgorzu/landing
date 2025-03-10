import Image from "next/image";
import buildImg from "@/assets/build-1.jpg";
import { ButtonUnderline } from "@/components/ButtonUnderline";
import { Trees } from "@/assets/Trees";

export const HousesBanner = () => {
  return (
    <div className="w-full bg-brand mb-6 text-white">
      <div className="w-full max-w-screen-lg mx-auto flex gap-4">
        <div className="flex-1 justify-center flex flex-col gap-4 relative pl-0">
          <h4 className="text-2xl font-medium">Domki</h4>

          <p>
            W ośrodku znajduje się osiem nowoczesnych, całorocznych domków o
            wielkości do 35 m2 z częściowo zadaszonym tarasami i widokiem na
            jezioro. Każdy z nich posiada salon z kominkiem oraz w pełni
            wyposażony aneks kuchenny (w tym ze zmywarką), osobną sypialnię i
            łazienkę. Dodatkowo sześć domków ma przytulną
          </p>

          <div className="justify-self-end">
            <ButtonUnderline>Czytaj więcej</ButtonUnderline>
          </div>

          <div className="absolute bottom-0 right-0">
            <Trees />
          </div>
        </div>

        <div className="flex-">
          <Image
            src={buildImg}
            alt="build"
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};
