import { useEffect, useCallback } from "react";

export const useScrollOptimization = () => {
  const preventOverscroll = useCallback((e: Event) => {
    // Cast to TouchEvent for touch handling
    const touchEvent = e as TouchEvent;

    // Prevent overscroll bounce on mobile
    if (touchEvent.touches.length === 1) {
      const touch = touchEvent.touches[0];
      const element = e.target as HTMLElement;

      // Check if we're at the top or bottom of scrollable content
      if (element.scrollTop === 0 && touch.clientY > 0) {
        e.preventDefault();
      }

      if (
        element.scrollTop + element.clientHeight >= element.scrollHeight &&
        touch.clientY < 0
      ) {
        e.preventDefault();
      }
    }
  }, []);

  const optimizeScrollPerformance = useCallback(() => {
    // Disable smooth scrolling on mobile for better performance
    if (window.innerWidth <= 768) {
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  useEffect(() => {
    // Apply scroll optimizations
    optimizeScrollPerformance();

    // Add touch event listeners to prevent overscroll
    const elements = document.querySelectorAll("section, div");
    elements.forEach((element) => {
      element.addEventListener("touchstart", preventOverscroll, {
        passive: false,
      });
    });

    // Handle resize events
    const handleResize = () => {
      optimizeScrollPerformance();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup
      elements.forEach((element) => {
        element.removeEventListener("touchstart", preventOverscroll);
      });
      window.removeEventListener("resize", handleResize);
    };
  }, [preventOverscroll, optimizeScrollPerformance]);

  return {
    optimizeScrollPerformance,
    preventOverscroll,
  };
};
