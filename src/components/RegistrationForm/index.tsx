"use client";
import {
  Reservation,
  reservationSchema,
} from "@/components/RegistrationForm/tools";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "next/form";
import { Textarea } from "@/components/ui/textarea";
import { toast, Toaster } from "sonner";

export const RegistrationForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Reservation>({
    mode: "onBlur",
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      phone: "",
    },
  });

  const onSubmit = async (data: Reservation) => {
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Wiadomość została wysłana!");
      } else {
        toast.error("Nie udało się wysłać formularza.");
      }
    } catch (err) {
      console.error("Błąd podczas wysyłania formularza:", err);
      toast.error("Wystąpił błąd przy wysyłce. Spróbuj ponownie.");
    } finally {
      reset();
    }
  };

  return (
    <div className="max-w-screen-md w-full mx-auto flex flex-col gap-6 px-4 py-6">
      <div>
        <h2 className="font-mono text-balance text-3xl md:text-4xl text-gray-700 border-b border-gray-300 pb-4">
          Formularz zapytania dotyczącego ośrodka, dostępności, warunków i
          wstępnej rezerwacji
        </h2>

        <p className="pt-4 leading-5 md:leading-6">
          Informujemy, że Państwa dane będą przetwarzane przez naszą firmę w
          celu identyfikacji zapytania, możliwości odpowiedzi na nie oraz
          procesu ewentualnej rezerwacji. Państwa danych nikomu nie
          przekazujemy.
        </p>
      </div>

      <Form
        action={""}
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LabelWrapper>
          <Label htmlFor="name">Imię i nazwisko*</Label>
          <Input {...register("name")} />
          <Error error={errors["name"]?.message} />
        </LabelWrapper>

        <LabelWrapper>
          <Label htmlFor="phone">Numer telefonu</Label>
          <Input {...register("phone")} />
          <Error error={errors["phone"]?.message} />
        </LabelWrapper>

        <LabelWrapper>
          <Label
            htmlFor="email"
            className="flex gap-2 flex-col items-start md:flex-row whitespace-nowrap flex-wrap"
          >
            <span>Adres email*</span>

            <span className="text-sm text-gray-600">
              (Prosimy dokładnie sprawdzić)
            </span>
          </Label>
          <Input {...register("email")} />
          <Error error={errors["email"]?.message} />
        </LabelWrapper>

        <LabelWrapper>
          <Label>Dodatkowe informacje</Label>
          <p className="text-sm leading-4 text-gray-600">
            Prosimy o podanie daty planowanego przyjazdu i wyjazdu, typu noclegu
            (domek, pokój), informacji dotyczących ilości osób dorosłych, dzieci
            i ich wieku, zwierząt oraz rodzaju wyżywienia:
          </p>
          <Textarea
            {...register("message")}
            placeholder="Napisz wiadomość..."
            rows={8}
            className="min-h-[150px]"
          />
          <Error error={errors["message"]?.message} />
        </LabelWrapper>

        <Button variant={"green"} disabled={isSubmitting}>
          {isSubmitting ? "Wysyłanie..." : "Wyślij"}
        </Button>

        <p className="text-red-500 font-semibold">
          UWAGA! Jeżeli nie dostaliście Państwo odpowiedzi prosimy o sprawdzenie
          czy e-mail nie trafił do spamu lub o kontakt telefoniczny. Odpisujemy
          na wszystkie zapytania!
        </p>
      </Form>

      <Toaster richColors />
    </div>
  );
};

const LabelWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2 w-full">{children}</div>;
};

const Error = ({ error }: { error?: string }) => {
  if (!error) return null;

  return <p className="text-red-600 text-sm font-medium">{error}</p>;
};
