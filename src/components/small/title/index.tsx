import React from "react";
import { ReactNode } from "react";
import "./style.scss";

interface ITitle {
  children: ReactNode;
}

export const Title = ({ children }: ITitle) => {
  return <h2 className="title">{children}</h2>;
};
