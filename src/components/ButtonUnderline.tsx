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
    <div className="w-fit cursor-pointer">
      <button className="uppercase cursor-pointer">{children}</button>
      <div className="max-w-32 flex flex-col gap-1">
        <div className={`h-px ${styles} w-5/8 mr-auto`} />
        <div className={`h-px ${styles} w-5/8 ml-auto`} />
      </div>
    </div>
  );
};
