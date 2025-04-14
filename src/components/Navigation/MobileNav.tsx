"use client";
import { Logo } from "@/assets/logo";
import { navLinks } from "@/components/Navigation/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
        <Link href="/" className="mr-6 hidden lg:flex z-10" prefetch={false}>
          <Logo className="text-white size-20" />
        </Link>
        <div className="grid gap-2 py-6">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href + i}
              href={href}
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
