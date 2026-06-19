"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!ring || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let ringScale = 1;
    let dotScale = 1;

    let visible = false;
    let hovered = false;

    const showCursor = () => {
      if (!visible) {
        ring.style.opacity = "1";
        dot.style.opacity = "1";
        visible = true;
      }
    };

    const hideCursor = () => {
      ring.style.opacity = "0";
      dot.style.opacity = "0";
      visible = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      showCursor();
    };

    const onMouseEnter = () => {
      showCursor();
    };

    const onMouseLeave = () => {
      hideCursor();
    };

    const onMouseDown = () => {
      ringScale = hovered ? 1.8 : 0.85;
      dotScale = 0.8;
    };

    const onMouseUp = () => {
      ringScale = hovered ? 2.2 : 1;
      dotScale = hovered ? 1.4 : 1;
    };

    const handleHoverStart = () => {
      hovered = true;

      ringScale = 2.2;
      dotScale = 1.4;

      ring.style.borderColor = "#c5a55e";
      ring.style.background = "rgba(197,165,94,0.08)";
      ring.style.boxShadow =
        "0 0 30px rgba(197,165,94,0.35), inset 0 0 15px rgba(197,165,94,0.15)";
    };

    const handleHoverEnd = () => {
      hovered = false;

      ringScale = 1;
      dotScale = 1;

      ring.style.borderColor = "rgba(255,255,255,0.15)";
      ring.style.background = "rgba(255,255,255,0.03)";
      ring.style.boxShadow =
        "0 0 20px rgba(197,165,94,0.15), inset 0 0 10px rgba(255,255,255,0.05)";
    };

    let animationFrame: number;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      ring.style.transform = `
        translate3d(${ringX - 20}px, ${ringY - 20}px, 0)
        scale(${ringScale})
      `;

      dot.style.transform = `
        translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)
        scale(${dotScale})
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [data-cursor]',
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    document.addEventListener("mousemove", onMouseMove, {
      passive: true,
    });

    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow:
            "0 0 20px rgba(197,165,94,0.15), inset 0 0 10px rgba(255,255,255,0.05)",
          willChange: "transform",
          transition:
            "opacity .3s ease, border-color .3s ease, background .3s ease, box-shadow .3s ease",
          mixBlendMode: "difference",
        }}
      />

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "9999px",
          background: "#c5a55e",
          boxShadow:
            "0 0 12px rgba(197,165,94,.9), 0 0 25px rgba(197,165,94,.5)",
          willChange: "transform",
          transition: "opacity .3s ease",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
  