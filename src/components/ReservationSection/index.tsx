"use client";
import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ReservationSection = () => {
  const [fromDate, setFromDate] = useState<Date | undefined>(new Date());
  const [toDate, setToDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-white min-h-12 gap-3 border-white justify-between border w-fit hidden sm:flex">
      <DatePicker label="Przyjazd" value={fromDate} onChange={setFromDate} />
      <DatePicker label="Wyjazd" value={toDate} onChange={setToDate} />

      <Button variant="green" size="lg">
        Rezerwuj
      </Button>
    </div>
  );
};
