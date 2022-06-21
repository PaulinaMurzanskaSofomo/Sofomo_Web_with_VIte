import React from "react";
import { useResize } from "./useResize";

export const useMobileScreen = () => {
  const screenSize = useResize();
  return screenSize < 768;
};

export const useTabletScreen = () => {
  const screenSize = useResize();
  return screenSize > 768 && screenSize < 1094;
};

export const useLaptopScreen = () => {
  const screenSize = useResize();
  return screenSize > 1094;
};

export const useScreenGraterThanMobile = () => {
  const screenSize = useResize();
  return screenSize > 375;
};

export const useScreenGraterThanTablet = () => {
  const screenSize = useResize();
  return screenSize > 768;
};
