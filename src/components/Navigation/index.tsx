import { Logo } from "@/assets/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "#", label: "O nas" },
  { href: "#", label: "Domki" },
  { href: "#", label: "Atrakcje" },
  { href: "#", label: "Galeria" },
  { href: "#", label: "Kontakt" },
  { href: "#", label: "Rezerwuj" },
];

export const Navigation = () => {
  return (
    <header className="sticky z-2 top-0 inset-x-0 flex h-16 w-full shrink-0 items-center justify-between flex-row-reverse lg:flex-row px-4 bg-brand lg:text-white shadow-md">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border border-white rounded-xs bg-brand text-white"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="pl-4">
          <Link href="#" className="mr-6 hidden lg:flex z-10" prefetch={false}>
            <Logo className="text-white size-20" />
          </Link>
          <div className="grid gap-2 py-6">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={href + i}
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                {label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Link href="#" className="mr-6 flex" prefetch={false}>
        <Logo className="text-white size-20" />
      </Link>

      <nav className="ml-auto hidden lg:flex gap-6">
        {navLinks.map(({ href, label }, i) => (
          <Link
            key={href + i}
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 transition-all hover:border-b hover:border-gray-400 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
            prefetch={false}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
