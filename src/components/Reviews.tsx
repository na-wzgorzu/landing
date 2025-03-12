import { ButtonUnderline } from "@/components/ButtonUnderline";
import { Title } from "@/components/Title";
import { reviews } from "@/data/reviews";
import bridgeImg from "@/assets/bridge.jpg";
import kayakImg from "@/assets/kayak.jpg";
import Image from "next/image";
import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/ui/carousel";

export const Reviews = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="text-center">
        <Title title="Wasze opinie" />
      </div>

      <div className="w-full bg-brand md:py-6 text-white flex flex-col items-center gap-6">
        <h5 className="hidden md:block uppercase w-full text-xl text-center tracking-wider font-medium">
          Wspaniałe miejsce!
        </h5>

        <div className="p-4 md:p-0 relative flex flex-col md:flex-row mx-auto max-w-screen-lg gap-4 justify-center w-full">
          <div className="w-full md:w-[310px] h-[413px] md:absolute left-0 -top-full">
            <Image
              className="object-cover w-full h-full"
              src={bridgeImg}
              alt="bridge"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="md:hidden uppercase w-full text-xl text-center tracking-wider font-medium">
              Wspaniałe miejsce!
            </h5>

            <ReviewItemsList />

            <div className="md:hidden w-full flex justify-center md:mt-6">
              <ButtonUnderline>Zobacz wszystkie</ButtonUnderline>
            </div>
          </div>

          <div className="w-full md:w-[310px] h-[413px] md:absolute right-0 -top-full">
            <Image
              className="object-cover w-full h-full"
              src={kayakImg}
              alt="kayak"
            />
          </div>
        </div>

        <div className="hidden md:block mx-auto whitespace-nowrap md:mt-6">
          <ButtonUnderline>Zobacz wszystkie</ButtonUnderline>
        </div>
      </div>
    </div>
  );
};

const ReviewItemsList = () => {
  return (
    <div className="md:max-w-[250px]">
      <Carousel color="secondary">
        {reviews.map(({ name, text }) => (
          <CarouselItem key={name}>
            <div className="w-full flex flex-col gap-6">
              <p className="line-clamp-10">{text}</p>
              <p className="font-medium">{name}</p>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};
