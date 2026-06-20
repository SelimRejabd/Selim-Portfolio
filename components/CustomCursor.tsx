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

    const RING_RADIUS = 28; // half of 56px
    const DOT_RADIUS = 3; // half of 6px

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let ringScale = 2.0;
    let dotScale = 1;

    let visible = false;
    let hovered = false;

    // ── style helpers ─────────────────────────────────────────────────────────

    const setIdleStyles = () => {
      ring.style.borderColor = "rgba(255,255,255,0.5)";
      ring.style.background = "transparent";
      ring.style.boxShadow = [
        "0 0 0 0.5px rgba(0,0,0,0.15)",
        // "inset 0 1px 0 rgba(255,255,255,0.18)",
        // "inset 0 -1px 0 rgba(0,0,0,0.10)",
      ].join(", ");
    };

    const setHoverStyles = () => {
      ring.style.borderColor = "#c5a55e";
      ring.style.background = "rgba(197,165,94,0.04)";
      ring.style.boxShadow = [
        "0 0 0 0.5px rgba(197,165,94,0.25)",
        "0 0 28px rgba(197,165,94,0.22)",
        "inset 0 1px 0 rgba(255,255,255,0.22)",
        "inset 0 -1px 0 rgba(0,0,0,0.10)",
      ].join(", ");
    };

    // ── visibility ────────────────────────────────────────────────────────────

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

    // ── mouse events ──────────────────────────────────────────────────────────

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      showCursor();
    };

    const onMouseEnter = () => showCursor();
    const onMouseLeave = () => hideCursor();

    const onMouseDown = () => {
      // ringScale = hovered ? 1.7 : 0.88;
      dotScale = 0.75;
    };

    const onMouseUp = () => {
      // ringScale = hovered ? 2.0 : 1;
      dotScale = hovered ? 1.2 : 1;
    };

    const handleHoverStart = () => {
      hovered = true;
      ringScale = 2.0;
      dotScale = 1.2;
      setHoverStyles();
    };

    const handleHoverEnd = () => {
      hovered = false;
      // ringScale = 1;
      dotScale = 1;
      setIdleStyles();
    };

    // ── RAF animation loop ────────────────────────────────────────────────────

    let animationFrame: number;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      ring.style.transform = `
        translate3d(${ringX - RING_RADIUS}px, ${ringY - RING_RADIUS}px, 0)
        scale(${ringScale})
      `;

      dot.style.transform = `
        translate3d(${mouseX - DOT_RADIUS}px, ${mouseY - DOT_RADIUS}px, 0)
        scale(${dotScale})
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    // ── interactive element wiring ────────────────────────────────────────────

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [data-cursor]',
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    setIdleStyles();
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
      {/* Lens ring — truly transparent with backdrop enhancement */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "9999px",
          border: "1.5px solid rgba(255,255,255,0.5)",
          background: "transparent",
          // brightness/contrast/saturate on whatever is behind the ring
          // creates the "looking through a lens" magnification perception
          backdropFilter: "brightness(1.1) contrast(1.08) saturate(1.12)",
          WebkitBackdropFilter: "brightness(1.1) contrast(1.08) saturate(1.12)",
          willChange: "transform",
          transition:
            "opacity .3s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease",
          // no mixBlendMode — glass is transparent, not inverting
        }}
      />

      {/* Centre dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "9999px",
          background: "#c5a55e",
          boxShadow:
            "0 0 8px rgba(197,165,94,.85), 0 0 18px rgba(197,165,94,.4)",
          willChange: "transform",
          transition: "opacity .3s ease",
          // no mixBlendMode — keeps dot gold on any background
        }}
      />
    </>
  );
}
