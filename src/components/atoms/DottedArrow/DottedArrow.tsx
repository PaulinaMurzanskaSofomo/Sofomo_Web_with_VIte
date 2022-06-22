import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { StyledDottedArrow } from "./StyledDottedArrow";
import { arrowRightDotted } from "../../../assets/icons";
import { theme } from "../../../themes/MainTheme";
import { ArrowVariant } from "../../../types/dottedArrowTypes";

export interface IArrow {
  variant?: ArrowVariant;
  onClick?: VoidFunction;
  backgroundColor?: string;
  color?: string;
  width?: string;
}

export const DottedArrow: FC<IArrow> = ({
  variant,
  onClick,
  color = theme.colors.gray500,
  backgroundColor = theme.colors.white,
  width = "5.4rem",
}) => {
  return (
    <StyledDottedArrow
      className={variant}
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
      width={width}
    >
      <ReactSVG src={arrowRightDotted} />
    </StyledDottedArrow>
  );
};
