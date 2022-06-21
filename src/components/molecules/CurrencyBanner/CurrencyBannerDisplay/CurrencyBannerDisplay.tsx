import React, { FC } from "react";
import { theme } from "../../../../themes/MainTheme";
import { doubledLoopArrayType } from "../../../../types/currencyTypes";
import { SectionContainer, Typography } from "../../../atoms";
import {
  StyledContainer,
  StyledDate,
  StyledRatesContainer,
  StyledAnimatedBlocksWrapper,
  StyledCurrencyBox,
  StyledAnimatedBlock,
  StyledCurrency,
  StyledCurrencyDisplay,
} from "./StyledCurrencyBanner";

interface ICurrency {
  today: string;
  currencyArrays: doubledLoopArrayType;
  errorMessage?: string;
}

export const CurrencyBannerDisplay: FC<ICurrency> = ({ today, currencyArrays, errorMessage }) => {
  return (
    <StyledCurrencyDisplay>
      <SectionContainer background={theme.colors.gray500}>
        <StyledContainer>
          {errorMessage !== "" ? (
            <Typography color={theme.colors.gray100} variant="body_text_2">
              Sorry, an error occur: {errorMessage}{" "}
            </Typography>
          ) : (
            <>
              <StyledDate>
                <Typography color={theme.colors.gray100} variant="body_text_2">
                  {today}
                </Typography>
              </StyledDate>
              <StyledRatesContainer>
                <StyledAnimatedBlocksWrapper>
                  {currencyArrays.map((array, i) => (
                    <StyledAnimatedBlock key={i}>
                      {array.map((item, i) => (
                        <StyledCurrencyBox key={i}>
                          <Typography variant="body_text_2" color={theme.colors.actionPrimaryGreen}>
                            1$
                          </Typography>
                          <StyledCurrency>
                            <Typography
                              as="span"
                              fontWeight="700"
                              color={theme.colors.white}
                              variant="body_text_2"
                            >
                              {item.currencyRate}{" "}
                            </Typography>
                            <Typography as="span" color={theme.colors.white} variant="body_text_2">
                              {item.currencySymbol}
                            </Typography>
                          </StyledCurrency>
                        </StyledCurrencyBox>
                      ))}
                    </StyledAnimatedBlock>
                  ))}
                </StyledAnimatedBlocksWrapper>
              </StyledRatesContainer>
            </>
          )}
        </StyledContainer>
      </SectionContainer>
    </StyledCurrencyDisplay>
  );
};
