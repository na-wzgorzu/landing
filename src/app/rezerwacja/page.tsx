import { RegistrationForm } from "@/components/RegistrationForm";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Rezerwacja",
  alternates: {
    canonical: "https://na-wzgorzu.pl/rezerwacja",
  },
};

export default function ReservationFormPage() {
  return <RegistrationForm />;
}
