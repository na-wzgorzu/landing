import { RegistrationForm } from "@/components/RegistrationForm";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Na wzgórzu - Rezerwacja",
};

export default function ReservationFormPage() {
  return <RegistrationForm />;
}
