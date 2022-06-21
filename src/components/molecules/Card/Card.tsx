import React, { FC } from "react";
import { theme } from "../../../themes/MainTheme";
import { CardTypes } from "../../../types/cardTypes";
import { Docket } from "../../atoms";
import { Socials } from "../Socials";
import { StyledCard, StyledCardBody, StyledHeading } from "./StyledCard";

export interface Props {
  variant: CardTypes;
  children: any;
  className?: string;
  headingColor?: string;
  socialIconsList?: any;
  title: string;
  width?: string;
  height?: string;
  label?: string;
  hover?: boolean;
  id?: string;
}
export const Card: FC<Props> = ({
  headingColor = theme.colors.dark,
  socialIconsList,
  className,
  title,
  width = "100%",
  height = "auto",
  children,
  label,
  variant,
  hover,
  id,
}) => {
  return (
    <StyledCard
      className={`${variant} ${hover ? "hovered" : ""} ${className}`}
      width={width}
      height={height}
      id={id}
    >
      <StyledHeading className={variant} headingColor={headingColor}>
        {title}
        {label && <Docket label={label} />}
      </StyledHeading>
      <StyledCardBody>
        {children}
        {socialIconsList && <Socials socialsList={socialIconsList} />}
      </StyledCardBody>
    </StyledCard>
  );
};
