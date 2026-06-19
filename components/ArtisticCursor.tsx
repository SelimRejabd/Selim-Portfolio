"use client";

import { useEffect, useRef } from "react";

const ArtisticCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const positions = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    // Create trail elements
    const trailCount = 8;
    const trailContainer = document.createElement("div");
    trailContainer.className =
      "fixed top-0 left-0 pointer-events-none z-[9998]";
    document.body.appendChild(trailContainer);

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement("div");
      trail.className = "fixed rounded-full";
      trail.style.width = `${8 - i * 0.8}px`;
      trail.style.height = `${8 - i * 0.8}px`;
      trail.style.opacity = `${0.5 - i * 0.05}`;
      trail.style.backgroundColor = "#C85A47";
      trailContainer.appendChild(trail);
      trailRefs.current.push(trail);
      positions.current.push({ x: 0, y: 0 });
    }

    const animate = () => {
      // Update trail positions
      for (let i = positions.current.length - 1; i > 0; i--) {
        positions.current[i].x +=
          (positions.current[i - 1].x - positions.current[i].x) * 0.3;
        positions.current[i].y +=
          (positions.current[i - 1].y - positions.current[i].y) * 0.3;
      }
      positions.current[0].x += (mouseX - positions.current[0].x) * 0.5;
      positions.current[0].y += (mouseY - positions.current[0].y) * 0.5;

      // Apply positions
      trailRefs.current.forEach((trail, i) => {
        if (trail) {
          trail.style.transform = `translate(${positions.current[i].x}px, ${positions.current[i].y}px)`;
        }
      });

      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = "1";
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
      trailRefs.current.forEach((trail) => {
        if (trail) trail.style.opacity = "0";
      });
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
      trailRefs.current.forEach((trail) => {
        if (trail)
          trail.style.opacity = String(
            0.5 - trailRefs.current.indexOf(trail) * 0.05,
          );
      });
    };

    // Hover effects
    const handleLinkHoverStart = () => {
      isHovering = true;
      trailRefs.current.forEach((trail) => {
        if (trail) {
          trail.style.backgroundColor = "#C5A55E";
          trail.style.width = `${
            12 - trailRefs.current.indexOf(trail) * 1.2
          }px`;
          trail.style.height = `${
            12 - trailRefs.current.indexOf(trail) * 1.2
          }px`;
        }
      });
    };

    const handleLinkHoverEnd = () => {
      isHovering = false;
      trailRefs.current.forEach((trail) => {
        if (trail) {
          trail.style.backgroundColor = "#C85A47";
          trail.style.width = `${8 - trailRefs.current.indexOf(trail) * 0.8}px`;
          trail.style.height = `${
            8 - trailRefs.current.indexOf(trail) * 0.8
          }px`;
        }
      });
    };

    // Click ripple effect
    const createRipple = (x: number, y: number) => {
      const ripple = document.createElement("div");
      ripple.className = "fixed pointer-events-none z-[9997]";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = "20px";
      ripple.style.height = "20px";
      ripple.style.marginLeft = "-10px";
      ripple.style.marginTop = "-10px";
      ripple.style.borderRadius = "50%";
      ripple.style.border = "2px solid #C85A47";
      ripple.style.animation = "ripple 0.6s ease-out forwards";
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    const onClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("click", onClick);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor]",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart);
      el.addEventListener("mouseleave", handleLinkHoverEnd);
    });

    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart);
        el.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
      cancelAnimationFrame(animationId);
      trailContainer.remove();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0"
    >
      {/* Main cursor - artistic diamond shape */}
      <div
        className="fixed w-6 h-6 -ml-3 -mt-3"
        style={{
          transform: "rotate(45deg)",
          background: "linear-gradient(135deg, #C85A47, #A04030)",
          boxShadow: "0 0 20px rgba(200, 90, 71, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      />

      <style jsx global>{`
        @keyframes ripple {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ArtisticCursor;
