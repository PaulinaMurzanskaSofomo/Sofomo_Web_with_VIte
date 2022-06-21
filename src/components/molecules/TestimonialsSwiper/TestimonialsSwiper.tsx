import React, { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../../../assets/content/testimonials/testimonials";
import { onInit } from "../../../libs/swiper";
import { Image, DottedArrow, Typography } from "../../atoms";
import { theme } from "../../../themes/MainTheme";
import { Title } from "../../molecules";
import { MotionContainer } from "../../../libs/framer";
import {
  StyledNavIndicators,
  StyledTestimonialsSwiper,
  StyledTextWrapper,
} from "./StyledTestimonialsSwiper";

export const TestimonialsSwiper: FC = () => {
  const swiperPrevRef = useRef<HTMLDivElement | null>(null);
  const swiperNextRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledTestimonialsSwiper className="swiper">
      <MotionContainer>
        <Typography
          as="h3"
          color={theme.colors.gray300}
          textTransform="uppercase"
          variant="body_text_6"
          fontWeight="700"
        >
          what clients are saying
        </Typography>
      </MotionContainer>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={100}
        pagination={{ clickable: true }}
        navigation={{ prevEl: swiperPrevRef.current, nextEl: swiperNextRef.current }}
        onInit={(swiper: any) => onInit(swiperPrevRef, swiperNextRef, swiper)}
        speed={300}
        slidesPerView={1}
      >
        {testimonials.map((item: any, i: number) => (
          <SwiperSlide className="my-swiper-slide" key={i}>
            <Title
              titleVariant="heading_5"
              title={item.beforeHighlight}
              titleHighlighted={item.highlightedFragment}
              titleAfter={item.afterHighlight}
              quotationMarkColor={theme.colors.dark}
              quotationMarkSize="2.5rem"
            />
            <Image
              width="16rem"
              height="4rem"
              margin="3.5rem auto 1.5rem"
              src={item.logo}
              alt="logo"
            />
            <Typography as="p" color={theme.colors.dark} variant="body_text_5" fontWeight="700">
              {item.title}
            </Typography>
            <StyledTextWrapper>
              <Typography as="p" variant="body_text_5" color={theme.colors.gray500}>
                {item.span}
              </Typography>
            </StyledTextWrapper>
          </SwiperSlide>
        ))}
        <StyledNavIndicators className="swiper-nav-prev" ref={swiperPrevRef}>
          <DottedArrow variant="left" />
        </StyledNavIndicators>
        <StyledNavIndicators className="swiper-nav-next" ref={swiperNextRef}>
          <DottedArrow variant="right" />
        </StyledNavIndicators>
      </Swiper>
    </StyledTestimonialsSwiper>
  );
};
