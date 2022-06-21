import React, { FC, ReactNode } from "react";
import { Typography } from "../../atoms";
import { StyledQuotation, StyledTitle, StyledUppercaseTitle } from "./StyledTitle";
import { TypographyTypes } from "../../../types/typographyTypes";
import { ReactComponent as Quote } from "../../../assets/icons/QuotationMark.svg";
import { theme } from "../../../themes/MainTheme";
import { MotionContainer } from "../../../libs/framer";

export interface ITitle {
  quotationMarkColor?: string;
  quotationMarkSize?: string;
  label?: string;
  labelColor?: string;
  title?: string | HTMLSpanElement | ReactNode;
  titleHighlighted?: string;
  titleAfter?: string | HTMLSpanElement;
  titleColor?: string;
  titleVariant: TypographyTypes;
  highlightColor?: string;
  margin?: string;
}

export const Title: FC<ITitle> = ({
  quotationMarkColor,
  quotationMarkSize,
  label,
  labelColor = theme.colors.gray300,
  title,
  titleHighlighted = "",
  titleAfter,
  titleColor,
  highlightColor = theme.colors.yellow,
  titleVariant,
  margin = "0 0 3.5rem 0",
}) => {
  const highlighted = titleHighlighted.split(" ");
  const wordsArray = highlighted.map((item) => item);

  return (
    <StyledTitle margin={margin}>
      {quotationMarkColor && (
        <MotionContainer>
          <StyledQuotation
            quotationMarkColor={quotationMarkColor}
            quotationMarkSize={quotationMarkSize}
            quotationMarginBottom={quotationMarkSize === "3rem" ? "2rem" : "1.5"}
          >
            <Quote className="quotation-mark" />
          </StyledQuotation>
        </MotionContainer>
      )}
      <MotionContainer delay={0.3}>
        <StyledUppercaseTitle>
          <Typography
            as="h5"
            variant="body_text_6"
            textTransform="uppercase"
            color={labelColor}
            fontWeight="700"
          >
            {label}
          </Typography>
        </StyledUppercaseTitle>
      </MotionContainer>
      <MotionContainer delay={0.4}>
        <Typography
          as="h3"
          variant={titleVariant}
          color={titleColor}
          highlightColor={highlightColor}
          fontWeight="700"
        >
          {title}{" "}
          {titleHighlighted &&
            wordsArray.map((word, i) => (
              <span className="highlighted" key={i}>
                {word}&nbsp;
              </span>
            ))}
          {titleAfter}
        </Typography>
      </MotionContainer>
    </StyledTitle>
  );
};
