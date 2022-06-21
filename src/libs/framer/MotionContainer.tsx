import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { MotionVariant } from "../../types/motionVariants";

interface Props {
  children: ReactNode;
  duration?: number;
  delay?: number;
  variant?: MotionVariant;
  className?: string;
}

const MotionContainer: FC<Props> = ({ children, duration, delay, variant, className }) => {
  const defaultVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: [0, 0.25, 0.5, 1],
      y: [10, 5, 0, 0],
    },
  };
  const imageSlideRight = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  const imageScaleUp = {
    initial: {
      opacity: 0,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  const motionVariant = () => {
    if (variant === "default") {
      return defaultVariants;
    }
    if (variant === "image-slide-right") {
      return imageSlideRight;
    }
    if (variant === "image-scale-up") {
      return imageScaleUp;
    }
    if (variant === "no-animation") {
      return;
    } else return defaultVariants;
  };

  return (
    <motion.div
      className={className}
      variants={motionVariant()}
      viewport={{ once: true }}
      initial="initial"
      whileInView="animate"
      transition={{ duration: duration || 0.6, delay: delay || 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
