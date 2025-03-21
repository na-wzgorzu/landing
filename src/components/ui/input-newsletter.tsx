import * as React from "react";

import { cn } from "@/lib/utils";

function InputNewsletter({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input file:text-gray-700 placeholder:text-gray-700 selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 border bg-gray-100 px-3 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 py-2 max-w-[300px]",
        "focus-visible:border-brand focus-visible:ring-brand focus-visible:ring-[1px]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { InputNewsletter as Input };
