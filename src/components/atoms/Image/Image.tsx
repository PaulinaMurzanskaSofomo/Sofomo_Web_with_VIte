import React, { FC, ReactNode } from "react";
import { theme } from "../../../themes/MainTheme";
import { Typography } from "../Typography";
import { StyledImage, StyledImageContainer } from "./StyledImage";

export interface Props {
  width?: string;
  height?: string;
  src: any;
  alt: string;
  className?: string;
  onClick?: VoidFunction;
  margin?: string;
  label?: string;
  animatedComponent?: ReactNode;
}

export const Image: FC<Props> = ({
  width = "100%",
  height = "100%",
  src,
  alt,
  margin = "0",
  className,
  onClick,
  label,
  animatedComponent,
}) => {
  return (
    <StyledImageContainer
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      margin={margin}
    >
      <StyledImage src={src} alt={alt} className={`${className} ${label ? "with-label" : ""}`} />
      {label && (
        <Typography variant="body_text_1" as="p" color={theme.colors.dark}>
          {label}
        </Typography>
      )}
      {animatedComponent && animatedComponent}
    </StyledImageContainer>
  );
};
