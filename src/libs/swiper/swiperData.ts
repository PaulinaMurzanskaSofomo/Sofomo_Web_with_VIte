import React from "react";

type RefType = { current: HTMLDivElement | null };

export const onInit = (swiperPrevRef: RefType, swiperNextRef: RefType, swiper: any) => {
  swiper.params.navigation.prevEl = swiperPrevRef.current;
  swiper.params.navigation.nextEl = swiperNextRef.current;
  swiper.navigation.init();
  swiper.navigation.update();
};

export const imageSwiperBreakpoints = {
  1094: {
    slidesPerView: 3.5,
  },
  1000: {
    slidesPerView: 3,
  },
  900: {
    slidesPerView: 2.75,
  },
  800: {
    slidesPerView: 2.5,
  },
  700: {
    slidesPerView: 2.25,
  },
  600: {
    slidesPerView: 2,
  },
  500: {
    slidesPerView: 1.75,
  },
  400: {
    slidesPerView: 1.5,
  },
  300: {
    slidesPerView: 1.25,
  },
};
