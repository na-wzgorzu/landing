type Props = {
  type?: "vertical" | "horizontal";
};

export const VerticalDivider = ({ type }: Props) => {
  if (type === "horizontal") {
    return (
      <div className="w-full h-10 flex flex-col gap-1.5 justify-center">
        <div className="bg-white h-px w-2/3 mr-auto" />
        <div className="bg-white h-px w-2/3 ml-auto" />
      </div>
    );
  }

  return (
    <div className="h-[200px] relative flex gap-2 justify-center w-full my-10">
      <div className="h-2/3 w-0.5 bg-gray-300 mt-auto rounded-2xl" />
      <div className="h-2/3 w-0.5 bg-gray-300 rounded-2xl" />
    </div>
  );
};
