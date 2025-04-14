import { Logo } from "@/assets/logo";
import { MobileNav } from "@/components/Navigation/MobileNav";
import { navLinks } from "@/components/Navigation/utils";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <header className="sticky z-2 top-0 inset-x-0 flex h-16 w-full shrink-0 items-center justify-between flex-row-reverse lg:flex-row px-4 bg-brand lg:text-white shadow-md">
      <MobileNav />

      <Link href="/" className="mr-6 flex" prefetch={false}>
        <Logo className="text-white size-20" />
      </Link>

      <nav className="ml-auto hidden lg:flex gap-2.5 lg:gap-4">
        {navLinks.map(({ href, label }, i) => (
          <Link
            key={href + i}
            href={href}
            className="group inline-flex h-9 w-max items-center justify-center lg:p-2 transition-all border-b border-brand hover:border-white focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
            prefetch={false}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
