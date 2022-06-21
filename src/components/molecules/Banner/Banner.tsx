import React, { FC, ReactNode } from "react";
import { MotionContainer } from "../../../libs/framer";
import { theme } from "../../../themes/MainTheme";
import { TypographyTypes } from "../../../types/typographyTypes";
import { Typography, SectionContainer } from "../../atoms";
import { StyledBanner, StyledSection, StyledBannerImage, StyledChildren } from "./StyledBanner";

export interface Props {
  image?: string;
  imageOuter?: boolean;
  imageInner?: boolean;
  title?: string;
  backgroundColor?: string;
  titleVariant: TypographyTypes;
  titleColor?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  animated?: boolean;
}

export const Banner: FC<Props> = ({
  image,
  title,
  backgroundColor,
  imageOuter,
  imageInner,
  titleVariant,
  titleColor,
  subtitle,
  children,
  className,
  animated,
}) => {
  return (
    <SectionContainer background={backgroundColor}>
      <StyledBanner className={className}>
        <StyledSection className={`${imageOuter ? "image-outer" : "image-inner"}`}>
          <MotionContainer className="grid-area" variant={animated ? "default" : "no-animation"}>
            <Typography variant={titleVariant} as="h3" color={titleColor} fontWeight="700">
              {title}
            </Typography>
            {subtitle && (
              <Typography color={theme.colors.gray300} variant="body_text_4">
                {subtitle}
              </Typography>
            )}
          </MotionContainer>
          <StyledChildren className="grid-area">{children}</StyledChildren>
          {imageInner && (
            <StyledBannerImage className="grid-area inner">
              <img src={image} alt="banner" />
            </StyledBannerImage>
          )}
        </StyledSection>
        {imageOuter && (
          <StyledBannerImage className="grid-area outer">
            <img src={image} alt="banner" />
          </StyledBannerImage>
        )}
      </StyledBanner>
    </SectionContainer>
  );
};
