"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { pl } from "date-fns/locale";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { SelectSingleEventHandler } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

dayjs.locale("pl");

type Props = {
  value: Date | undefined;
  onChange: SelectSingleEventHandler;
} & React.ComponentProps<typeof Calendar>;

// const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function DatePicker({ value, onChange, ...props }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal rounded-sm",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {value ? (
            dayjs(value).format("DD-MM-YYYY")
          ) : (
            <span>Wybierz datę</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" hideWhenDetached>
        <Calendar
          {...props}
          mode="single"
          lang="pl"
          locale={pl}
          selected={value}
          onSelect={(date, selectedDay, activeModifier, event) => {
            onChange(date, selectedDay, activeModifier, event);
            setOpen(false);
          }}
          initialFocus
          classNames={{
            day_selected:
              "bg-brand focus:bg-brand hover:focus:opacity-80 text-white hover:text-white",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
