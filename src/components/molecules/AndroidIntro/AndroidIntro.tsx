import React from "react";
import { Title, ProgressCards } from "../../molecules";
import { ReactSVG } from "react-svg";
import { androidAnimated, androidBase } from "../../../assets/images";
import { ROUTE } from "../../../routes";
import { theme } from "../../../themes/MainTheme";
import { MotionContainer } from "../../../libs/framer";
import { StyledParagraphWrapper } from "../../../pages/HomePage/StyledHomePage";
import { Button, Image, Typography } from "../../../components/atoms";
import {
  StyledAndroidIntro,
  StyledImageBlock,
  StyledIntroAndCardsWrapper,
  StyledIntroWrapper,
  StyledCardsWrapper,
  StickyElement,
} from "./StyledAndroidIntro";

export const AndroidIntro = () => {
  return (
    <StyledAndroidIntro>
      <StyledImageBlock>
        <StickyElement>
          <MotionContainer>
            <Image
              src={androidBase}
              animatedComponent={<ReactSVG src={androidAnimated} />}
              height=""
              alt="android"
              className="android"
            />
          </MotionContainer>
        </StickyElement>
      </StyledImageBlock>
      <StyledIntroAndCardsWrapper>
        <StyledIntroWrapper>
          <Title
            titleVariant="heading_2"
            label="android developers"
            titleColor={theme.colors.dark}
            title="Android developers, ready to join your team"
            labelColor={theme.colors.blue}
          />
          <MotionContainer>
            <StyledParagraphWrapper style={{ margin: "1.5rem 0 3rem 0" }}>
              <Typography variant="body_text_9">
                Sofomo is your trusted Android development partner. Our talented Android developers
                join your team, working directly with you to solve your Android challenges and
                succeed with Android.
              </Typography>
            </StyledParagraphWrapper>
            <Button label="Hire Android Developers" variant="primary" path={ROUTE.OUTSOURCE} />
          </MotionContainer>
        </StyledIntroWrapper>
        <StyledCardsWrapper>
          <ProgressCards />
        </StyledCardsWrapper>
      </StyledIntroAndCardsWrapper>
    </StyledAndroidIntro>
  );
};
