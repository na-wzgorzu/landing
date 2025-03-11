import { cva, VariantProps } from "class-variance-authority";

const getStyles = cva("", {
  variants: {
    color: {
      white: "bg-white",
      black: "bg-gray-300",
    },
  },
  defaultVariants: {
    color: "white",
  },
});

type Props = {
  type?: "vertical" | "horizontal";
} & VariantProps<typeof getStyles>;

export const VerticalDivider = ({ type, color }: Props) => {
  const styles = getStyles({ color });

  if (type === "horizontal") {
    return (
      <div className="w-full h-10 flex flex-col gap-1.5 justify-center">
        <div className={`${styles} h-px w-2/3 mr-auto`} />
        <div className={`${styles} h-px w-2/3 ml-auto`} />
      </div>
    );
  }

  return (
    <div className="h-[200px] relative flex gap-2 justify-center w-full my-10">
      <div className={`h-2/3 w-0.5 ${styles} mt-auto rounded-2xl`} />
      <div className={`h-2/3 w-0.5 ${styles} rounded-2xl`} />
    </div>
  );
};
