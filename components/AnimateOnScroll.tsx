"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AnimationType =
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "rotateIn";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animations = {
  fadeInUp: {
    hidden: "opacity-0 translate-y-16",
    visible: "opacity-100 translate-y-0",
  },
  fadeInDown: {
    hidden: "opacity-0 -translate-y-16",
    visible: "opacity-100 translate-y-0",
  },
  fadeInLeft: {
    hidden: "opacity-0 -translate-x-16",
    visible: "opacity-100 translate-x-0",
  },
  fadeInRight: {
    hidden: "opacity-0 translate-x-16",
    visible: "opacity-100 translate-x-0",
  },
  zoomIn: {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  rotateIn: {
    hidden: "opacity-0 -rotate-6 scale-95",
    visible: "opacity-100 rotate-0 scale-100",
  },
};

const AnimateOnScroll = ({
  children,
  className,
  animation = "fadeInUp",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: AnimateOnScrollProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animClass = animations[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? animClass.visible : animClass.hidden,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
