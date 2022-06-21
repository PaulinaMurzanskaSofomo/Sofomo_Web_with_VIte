import React, { FC } from "react";
import { StyledButton } from "./StyledButton";
import { Link } from "react-router-dom";
import { ButtonSubmit, ButtonVariant } from "../../../types/buttonTypes";

export interface IButton {
  label: string;
  path?: string;
  margin?: string;
  type?: ButtonSubmit;
  width?: string;
  variant?: ButtonVariant;
  onClick?: VoidFunction;
}

export const Button: FC<IButton> = ({
  label,
  path,
  margin = "0",
  variant,
  type,
  onClick,
  width = "23.4rem",
}) => {
  return (
    <StyledButton className={variant} margin={margin} type={type} onClick={onClick} width={width}>
      {path ? <Link to={path}>{label}</Link> : label}
    </StyledButton>
  );
};
