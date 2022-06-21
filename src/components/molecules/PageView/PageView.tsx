import React, { FC, ReactNode } from "react";
import { SectionContainer, Button, Image } from "../../atoms";
import { PageViewVariants } from "../../../types/pageViewTypes";
import { ButtonVariant } from "../../../types/buttonTypes";
import { StyledPageView, StyledContent, StyledViewImage } from "./StyledPageView";
import { MotionContainer } from "../../../libs/framer";

export interface Props {
  btnVariant?: ButtonVariant;
  btnLabel?: string;
  btnPath?: string;
  btnWidth?: string;
  btnOnClick?: VoidFunction;
  image?: string;
  id?: string;
  children: any;
  variant: PageViewVariants;
  background?: string;
  className?: string;
  animatedSvg?: boolean;
  animatedComponent?: ReactNode;
  flexDirection?: string;
}

export const PageView: FC<Props> = ({
  btnLabel,
  btnPath,
  image,
  children,
  variant,
  btnVariant,
  background,
  flexDirection = "column-reverse",
  id = "i",
  btnOnClick,
  btnWidth,
  animatedComponent,
}) => {
  return (
    <SectionContainer background={background}>
      <StyledPageView name={variant} id={id} flexDirection={flexDirection}>
        <StyledContent name={variant}>
          {children}
          {btnLabel && (
            <MotionContainer duration={0.5} delay={0.5}>
              <Button
                width={btnWidth}
                label={btnLabel}
                onClick={btnOnClick}
                path={btnPath}
                variant={btnVariant}
              />
            </MotionContainer>
          )}
        </StyledContent>
        {image && (
          <StyledViewImage className={variant} name={variant}>
            <MotionContainer>
              <Image src={image} alt="section" animatedComponent={animatedComponent} />
            </MotionContainer>
          </StyledViewImage>
        )}
      </StyledPageView>
    </SectionContainer>
  );
};
