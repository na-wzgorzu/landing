import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      color: {
        white: "bg-white",
        black: "bg-gray-700",
      },
    },
    defaultVariants: {
      color: "white",
    },
  }
);

type Props = VariantProps<typeof buttonVariants>;

export const ButtonUnderline = ({
  children,
  color,
}: PropsWithChildren<Props>) => {
  const styles = buttonVariants({ color });
  return (
    <div className="group max-w-32 w-full flex flex-col gap-1">
      <button className="uppercase">{children}</button>
      <div className={`h-px ${styles} w-5/8 mr-auto`} />
      <div className={`h-px ${styles} w-5/8 ml-auto`} />
    </div>
  );
};
