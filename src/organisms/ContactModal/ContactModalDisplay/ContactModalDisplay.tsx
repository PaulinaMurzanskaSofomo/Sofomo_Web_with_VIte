import React, { FC } from "react";
import { theme } from "../../../themes/MainTheme";
import { Title } from "../../../components/molecules";
import { Image, Docket, Typography } from "../../../components/atoms";
import { ContactFormik } from "../../ContactFormik";
import { cross, quotationMark } from "../../../assets/icons";
import {
  StyledBlueSection,
  StyledModalBody,
  StyledContactModal,
  StyledCloseButton,
  WrapperOuter,
  WrapperInner,
  StyledTitleWrapper,
  StyledQuoteWrapper,
  StyledModalTitle,
  StyledSubtitle,
} from "./StyledContactModal";
import { ModalProps } from "../ContactModal";

export const ContactModalDisplay: FC<ModalProps> = ({
  formSubmitted,
  onModalClose,
  displayClass,
  formTitle,
  formSubtitle,
  outsource,
}) => {
  return (
    <WrapperOuter className={`${outsource ? "outsource" : displayClass}`}>
      <WrapperInner>
        <StyledContactModal>
          <StyledCloseButton
            onClick={onModalClose}
            className={`${outsource ? "outsource" : ""} ${formSubmitted ? "submitted" : ""}`}
          >
            <img src={cross} alt="" />
          </StyledCloseButton>
          <StyledModalBody
            className={`${outsource && "outsource"} ${formSubmitted ? "submitted" : ""}`}
          >
            <StyledModalTitle>
              <Typography
                as="h3"
                variant={outsource ? "heading_2" : "heading_1"}
                fontWeight="700"
                color={theme.colors.dark}
              >
                {formSubmitted ? "Thanks" : formTitle}
              </Typography>
            </StyledModalTitle>
            <Typography variant="body_text_8" color={theme.colors.dark}>
              {formSubmitted ? "We can’t wait to chat with you" : formSubtitle}
            </Typography>
            {formSubmitted && <Docket label="We will respond in 3 hours" variant="wider" />}
            {!formSubmitted && (
              <StyledSubtitle>
                <Typography
                  variant="body_text_5"
                  fontWeight="700"
                  as="span"
                  color={theme.colors.dark}
                >
                  3 hours
                </Typography>
                <Typography as="span" variant="body_text_5" color={theme.colors.dark}>
                  Average response time
                </Typography>
                <ContactFormik outsource={outsource} />
              </StyledSubtitle>
            )}
          </StyledModalBody>
          <StyledBlueSection className={outsource ? "hide" : ""}>
            <StyledQuoteWrapper>
              <Image src={quotationMark} alt="quote" width="2rem" />
            </StyledQuoteWrapper>
            <StyledTitleWrapper>
              <Title
                titleVariant="heading_7"
                titleColor={theme.colors.white}
                titleHighlighted="Sofomo’s talent is superb."
                highlightColor={theme.colors.purple}
                titleAfter="They’ve been a real game changer for us."
                margin="0"
              />
            </StyledTitleWrapper>
            <Typography variant="body_text_3" color={theme.colors.white} fontWeight="700">
              Jim Conning
            </Typography>
            <Typography variant="body_text_3" color={theme.colors.white}>
              VP Engineering, Dictionary.com Top 200 Traffic Site
            </Typography>
          </StyledBlueSection>
        </StyledContactModal>
      </WrapperInner>
    </WrapperOuter>
  );
};
