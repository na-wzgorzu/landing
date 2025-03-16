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

dayjs.locale("pl");

type Props = {
  label: string;
  value: Date | undefined;
  onChange: SelectSingleEventHandler;
} & React.ComponentProps<typeof Calendar>;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function DatePicker({ label, value, onChange, ...props }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <button className="hover:cursor-pointer hover:bg-gray-100 transition-all px-1">
          <div className="flex text-sm font-light gap-3">
            <div className="pt-1 pl-1">{label}</div>
            <div className="flex items-end">
              <span className="font-normal text-4xl mr-1">
                {dayjs(value).format("DD")}
              </span>
              {capitalize(dayjs(value).format("MMM"))}
            </div>
          </div>
        </button>
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
