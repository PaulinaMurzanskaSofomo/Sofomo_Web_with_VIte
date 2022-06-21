import React, { useEffect, useState, useRef } from "react";
import { OutsourcePageDisplay } from "./OutsourcePageDisplay/OutsourcePageDisplay";

export const OutsourcePage = () => {
  const [stickyForm, setStickyForm] = useState(false);
  const refsArray = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  const [centeredItem, setCenteredItem] = useState("");

  const showForm = () => {
    if (window.scrollY >= 150) {
      setStickyForm(true);
    }
  };

  const handleScroll = () => {
    window.scroll({
      top: 750,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", showForm);
    return () => {
      window.removeEventListener("scroll", showForm);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const halfScreen = window.innerHeight * 0.5;
      const animationStartHeight = halfScreen - 180;

      refsArray.forEach((ref) => {
        if (ref.current) {
          const rectTop = ref.current.getBoundingClientRect().top;
          if (rectTop >= animationStartHeight && rectTop <= halfScreen) {
            setCenteredItem(ref.current.id);
          }
        }
      });
    });
  }, [refsArray]);

  return (
    <OutsourcePageDisplay
      stickyForm={stickyForm}
      handleScroll={handleScroll}
      refsArray={refsArray}
      centeredItem={centeredItem}
    />
  );
};
