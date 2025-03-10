import React from "react";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <div className="underline text-gray-700 font-semibold font-mono text-3xl underline-offset-8 decoration-gray-700">
      {title}
    </div>
  );
};
