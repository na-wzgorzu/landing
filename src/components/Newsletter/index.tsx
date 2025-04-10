"use client";
import { ButtonUnderline } from "@/components/ButtonUnderline";
import { VerticalDivider } from "@/components/VerticalDivider";
import Image from "next/image";
import React from "react";
import about1Img from "@/assets/about-1.jpg";
import about2Img from "@/assets/about-2.jpg";
import { FooterBuild } from "@/assets/FooterBuild";
import { Input } from "@/components/ui/input-newsletter";
import { saveEmail } from "@/components/Newsletter/actions";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster, toast } from "sonner";

const emailSchema = z.object({
  email: z.string().email({ message: "Nieprawidłowy e-mail" }),
});

export type EmailFormValues = z.infer<typeof emailSchema>;

export const Newsletter = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: EmailFormValues) => {
    try {
      saveEmail(data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Gratulacje! Zapisano e-mail");
    } catch {
      toast.error("Niestety, coś poszło nie tak");
    } finally {
      reset();
    }
  };

  return (
    <>
      <Toaster richColors />
      <div className="max-w-screen-lg w-full p-4 mx-auto flex flex-col-reverse gap-10 lg:gap-2 lg:flex-row justify-between items-center">
        <div className="flex w-full flex-col items-center lg:items-stretch gap-4 p-4 pr-8">
          <h4 className="font-mono text-3xl">Newsletter</h4>

          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              {...register("email")}
              name="email"
              id="email"
              placeholder="Podaj swój adres email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}

            <div className="flex justify-around">
              <div />
              <ButtonUnderline color={"black"} disabled={isSubmitting}>
                {isSubmitting ? "Zapisywanie..." : "Zapisz mnie"}
              </ButtonUnderline>
            </div>
          </form>
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

          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100063631957611"
          >
            <ButtonUnderline color={"black"}>Zobacz</ButtonUnderline>
          </Link>
        </div>
      </div>
    </>
  );
};
