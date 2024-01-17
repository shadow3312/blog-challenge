import React from "react";
export type TitleProps = {
  text: string;
};
export default function Title({ text }: TitleProps) {
  return <h1 className="text-center mb-8">{text}</h1>;
}
