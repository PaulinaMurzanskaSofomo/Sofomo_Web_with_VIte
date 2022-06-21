import React, { ElementType, FC, ReactNode } from "react";
import { theme } from "../../../themes/MainTheme";
import { TypographyTypes } from "../../../types/typographyTypes";
import { StyledTypography } from "./StyledTypography";

interface Props {
  as?: ElementType;
  color?: string;
  width?: string;
  highlightColor?: string;
  fontWeight?: string;
  variant?: TypographyTypes;
  children: ReactNode;
  className?: string;
  textTransform?: string;
}

export const Typography: FC<Props> = ({
  as = "p",
  children,
  color = theme.colors.gray500,
  width = "auto",
  className,
  highlightColor,
  variant,
  fontWeight = "400",
  textTransform = "none",
}) => {
  return (
    <StyledTypography
      as={as}
      className={className}
      width={width}
      color={color}
      highlightColor={highlightColor}
      fontWeight={fontWeight}
      name={variant}
      textTransform={textTransform}
    >
      {children}
    </StyledTypography>
  );
};
