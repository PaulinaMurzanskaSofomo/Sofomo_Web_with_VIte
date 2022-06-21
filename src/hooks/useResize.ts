import React, { useState, useEffect } from "react";

export function useResize() {
  const initialScreen = window.innerWidth;
  const [screenSize, setScreenSize] = useState(initialScreen);

  const handleResize = () => {
    const screen = window.innerWidth;
    setScreenSize(screen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
