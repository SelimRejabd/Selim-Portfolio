"use client";

import { useEffect, useRef } from "react";

const CustomScrollbar = () => {
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const thumb = scrollThumbRef.current;
    const track = scrollTrackRef.current;
    if (!thumb || !track) return;

    let isDragging = false;
    let startY = 0;
    let startTop = 0;

    const updateThumbPosition = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const viewportHeight = window.innerHeight;
      const trackHeight = track.clientHeight;
      const thumbHeight = Math.max(
        (viewportHeight / document.documentElement.scrollHeight) * trackHeight,
        40,
      );

      thumb.style.height = `${thumbHeight}px`;

      if (docHeight > 0) {
        const thumbTop = (scrollTop / docHeight) * (trackHeight - thumbHeight);
        thumb.style.transform = `translateY(${thumbTop}px)`;
      }
    };

    const onScroll = () => {
      updateThumbPosition();
      // Add scroll progress indicator
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      thumb.style.background = `linear-gradient(180deg, #C85A47 ${scrollPercentage * 100}%, #C5A55E ${scrollPercentage * 100}%)`;
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startY = e.clientY;
      startTop = parseFloat(
        thumb.style.transform.replace("translateY(", "").replace("px)", "") ||
          "0",
      );
      thumb.style.transition = "none";
      document.body.style.userSelect = "none";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const deltaY = e.clientY - startY;
      const trackHeight = track.clientHeight;
      const thumbHeight = thumb.clientHeight;
      const maxTop = trackHeight - thumbHeight;
      const newTop = Math.max(0, Math.min(startTop + deltaY, maxTop));

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTo = (newTop / maxTop) * docHeight;

      window.scrollTo({
        top: scrollTo,
        behavior: "instant" as ScrollBehavior,
      });

      thumb.style.transform = `translateY(${newTop}px)`;
    };

    const onMouseUp = () => {
      isDragging = false;
      thumb.style.transition = "transform 0.1s ease-out";
      document.body.style.userSelect = "";
    };

    // Initial setup
    updateThumbPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateThumbPosition);
    thumb.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateThumbPosition);
      thumb.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Custom Scrollbar */}
      <div
        ref={scrollTrackRef}
        className="fixed right-2 top-1/2 -translate-y-1/2 w-1.5 h-[60vh] bg-ink-black/5 rounded-full z-50 hidden md:block"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div
          ref={scrollThumbRef}
          className="absolute top-0 left-0 w-full rounded-full cursor-pointer transition-transform duration-100 ease-out"
          style={{
            background: "linear-gradient(180deg, #C85A47 0%, #C5A55E 100%)",
            boxShadow: "0 0 10px rgba(200, 90, 71, 0.3)",
            minHeight: "40px",
          }}
        />
      </div>

      {/* Scroll Progress Line at Top */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-transparent">
        <div
          id="scroll-progress"
          className="h-full transition-all duration-150"
          style={{
            background: "linear-gradient(90deg, #C85A47, #C5A55E, #7C8A7E)",
            width: "0%",
          }}
        />
      </div>

      <style jsx global>{`
        /* Hide default scrollbar */
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        body::-webkit-scrollbar {
          display: none;
        }

        /* Scroll progress bar update */
        .scroll-progress-bar {
          transition: width 0.15s ease-out;
        }
      `}</style>
    </>
  );
};

export default CustomScrollbar;
