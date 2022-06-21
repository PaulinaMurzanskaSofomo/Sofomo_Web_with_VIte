import React, { FC, ReactNode } from "react";
import { ListVariants } from "../../../types/listTypes";
import { StyledList } from "./StyledList";

export interface Props {
  variant: ListVariants;
  children?: ReactNode;
  isActive?: boolean;
  className?: string;
  margin?: string;
  onMouseLeave?: VoidFunction;
  onClick?: (e: any) => void;
  id?: string;
}

export const List: FC<Props> = ({
  variant,
  children,
  isActive,
  className,
  margin = "3.5rem 0 0 0",
  id,
  onMouseLeave,
  onClick,
}) => {
  return (
    <StyledList
      className={`${variant} ${className} ${isActive ? "active" : ""}`}
      margin={margin}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      id={id}
    >
      {children}
    </StyledList>
  );
};
