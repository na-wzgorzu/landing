import { ButtonUnderline } from "@/components/ButtonUnderline";
import { VerticalDivider } from "@/components/VerticalDivider";
import React from "react";

export const Newsletter = () => {
  return (
    <div className="max-w-screen-lg w-full p-4 mx-auto flex justify-between items-center">
      <div className="flex w-full flex-col gap-4 p-4 pr-8">
        <h4 className="font-mono text-2xl">Newsletter</h4>
        <div className="bg-gray-100 p-2 whitespace-nowrap max-w-[300px] border">
          Podaj swój adres email
        </div>

        <div className="flex justify-end">
          <ButtonUnderline color={"black"}>Zapisz mnie</ButtonUnderline>
        </div>
      </div>

      <div>
        <VerticalDivider />
      </div>
      <div className="text-3xl font-mono flex items-center justify-center w-full">
        Nasz Facebook
      </div>
    </div>
  );
};
