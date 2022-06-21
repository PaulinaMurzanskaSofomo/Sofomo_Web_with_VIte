import React, { FC } from "react";
import { StyledIcon } from "./StyledIcon";

export interface Props {
  fontSize?: string;
  path?: string;
  variant?: string;
  width?: string;
  children?: any;
}

export const Icon: FC<Props> = ({
  fontSize = "2rem",
  path,
  children,
  variant,
  width = "3.5rem",
}) => {
  return (
    <StyledIcon
      className={variant}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      fontSize={fontSize}
      width={width}
    >
      {children}
    </StyledIcon>
  );
};
