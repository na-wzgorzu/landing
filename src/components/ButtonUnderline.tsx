import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const buttonVariants = cva("", {
  variants: {
    color: {
      white: "bg-white",
      black: "bg-gray-700",
    },
  },
  defaultVariants: {
    color: "white",
  },
});

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
