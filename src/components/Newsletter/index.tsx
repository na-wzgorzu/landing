import { ButtonUnderline } from "@/components/ButtonUnderline";
import { VerticalDivider } from "@/components/VerticalDivider";
import Image from "next/image";
import React from "react";
import about1Img from "@/assets/about-1.jpg";
import about2Img from "@/assets/about-2.jpg";
import { FooterBuild } from "@/assets/FooterBuild";
import { Input } from "@/components/ui/input-newsletter";
import Form from "next/form";
import { saveEmail } from "@/components/Newsletter/actions";

export const Newsletter = () => {
  return (
    <div className="max-w-screen-lg w-full p-4 mx-auto md:mt-10 flex flex-col-reverse gap-10 lg:gap-2 lg:flex-row justify-between items-center">
      <div className="flex w-full flex-col items-center lg:items-stretch gap-4 p-4 pr-8">
        <h4 className="font-mono text-3xl">Newsletter</h4>

        <Form className="flex flex-col gap-4 w-full" action={saveEmail}>
          <Input name="email" id="email" placeholder="Podaj swój adres email" />

          <div className="flex justify-around">
            <div />
            <ButtonUnderline color={"black"}>Zapisz mnie</ButtonUnderline>
          </div>
        </Form>
      </div>

      <div className="hidden lg:block">
        <VerticalDivider color={"black"} />
      </div>

      <div className="lg:hidden block w-full max-w-sm">
        <VerticalDivider type="horizontal" color={"black"} />
      </div>

      <div className="w-full flex flex-col gap-6 justify-center items-center">
        <div className="text-3xl font-mono flex flex-col gap-22 sm:flex-row items-center justify-center w-full">
          <div className="w-full whitespace-break-spaces flex justify-center">
            Nasz{"\n"}Facebook
          </div>

          <div className="w-full h-full min-h-20 flex justify-center">
            <Image
              src={about1Img}
              alt="facebook1-section"
              className="object-cover size-22 outline-8 outline-white -mr-8 -mt-10 z-1"
            />

            <div className="relative w-48">
              <Image
                src={about2Img}
                alt="facebook2-section"
                className="object-cover z-10 w-full outline-8 outline-brand"
              />

              <div className="w-full absolute -z-1 -top-[90px] -right-0">
                <FooterBuild />
              </div>
            </div>
          </div>
        </div>

        <ButtonUnderline color={"black"}>Zobacz</ButtonUnderline>
      </div>
    </div>
  );
};
