"use client";
import {
  Reservation,
  reservationSchema,
} from "@/components/RegistrationForm/tools";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "next/form";
import { DatePicker } from "@/components/DatePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import dayjs from "dayjs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<Reservation>({
    mode: "onBlur",
    resolver: zodResolver(reservationSchema),
  });
  console.log("🚀 :32 errors:", errors);

  const onSubmit = (data: Reservation) => {
    console.log("🚀 ~ data:", data);
  };

  return (
    <div className="max-w-screen-md w-full mx-auto flex flex-col gap-6 px-4 py-6">
      <div>
        <h2 className="font-mono text-4xl text-gray-700 border-b border-gray-300 pb-4">
          Zarezerwuj swoje miejsce
        </h2>
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
          <Label htmlFor="phone">Numer telefonu*</Label>
          <Input {...register("phone")} />
          <Error error={errors["phone"]?.message} />
        </LabelWrapper>

        <LabelWrapper>
          <Label htmlFor="email">Adres email</Label>
          <Input {...register("email")} />
          <Error error={errors["email"]?.message} />
        </LabelWrapper>

        <div className="flex gap-2 w-full">
          <LabelWrapper>
            <Label htmlFor="from">Przyjazd*</Label>
            <Controller
              control={control}
              name="from"
              defaultValue={new Date()}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  value={value}
                  onChange={onChange}
                  fromDate={dayjs(value).toDate()}
                />
              )}
            />
            <Error error={errors["from"]?.message} />
          </LabelWrapper>

          <LabelWrapper>
            <Label htmlFor="to">Wyjazd*</Label>
            <Controller
              control={control}
              name="to"
              defaultValue={new Date()}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  value={value}
                  onChange={onChange}
                  fromDate={dayjs(watch("from")).toDate()}
                />
              )}
            />
            <Error error={errors["to"]?.message} />
          </LabelWrapper>
        </div>

        <LabelWrapper>
          <Label>Udogodnienia</Label>

          <div className="flex gap-4">
            <Controller
              control={control}
              name="withAnimal"
              render={({ field: { onChange, value } }) => (
                <div className="flex gap-2">
                  <Checkbox
                    defaultChecked={false}
                    checked={value}
                    onCheckedChange={onChange}
                    id="withAnimal"
                  />
                  <Label htmlFor="withAnimal">zwierzęta</Label>
                </div>
              )}
            />

            <Controller
              control={control}
              name="withBreakfast"
              render={({ field: { onChange, value } }) => (
                <div className="flex gap-2">
                  <Checkbox
                    defaultChecked={false}
                    checked={value}
                    onCheckedChange={onChange}
                    id="withBreakfast"
                  />
                  <Label htmlFor="withBreakfast">śniadanie</Label>
                </div>
              )}
            />
          </div>
        </LabelWrapper>

        <div className="flex gap-2 w-fit">
          <LabelWrapper>
            <Label>Ilość dorosłych</Label>
            <Input
              {...register("adultAmount")}
              type="number"
              defaultValue={1}
            />
          </LabelWrapper>

          <LabelWrapper>
            <Label>Ilość dzieci</Label>
            <Input
              {...register("childAmount")}
              defaultValue={0}
              type="number"
            />
          </LabelWrapper>
        </div>

        <LabelWrapper>
          <Label>Wybierz typ noclegu</Label>
          <Controller
            control={control}
            name="buildType"
            render={({ field: { value, onChange } }) => (
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="house">Domek</SelectItem>
                    <SelectItem value="room">Pokój</SelectItem>
                    <SelectItem value="apartment">Apartament</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

          <Error error={errors["buildType"]?.message} />
        </LabelWrapper>

        <LabelWrapper>
          <Label>Dodatkowe informacje</Label>
          <Textarea
            {...register("message")}
            placeholder="Napisz wiadomość..."
          />
          <Error error={errors["message"]?.message} />
        </LabelWrapper>

        <Button variant="green">Wyślij</Button>
      </Form>
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
