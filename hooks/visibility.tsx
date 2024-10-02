import { useEffect, useState, useRef } from "react";

// Custom Hook for observing element visibility in the viewport
export const useVisibility = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [viewCount, setViewCount] = useState<number>(0);
  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elemRef.current) {
        const rect = elemRef.current.getBoundingClientRect();
        
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;

        // Calculate how much of the element is visible in the viewport
        const visiblePartTop = Math.max(0, viewportHeight - rect.top);
        const visiblePartBottom = Math.max(0, rect.bottom);
        const visibleHeight = Math.min(visiblePartTop, visiblePartBottom);

        // Check if at least 50% of the element is visible
        const isEntered = visibleHeight >= elementHeight / 2;

        setVisible(isEntered);
      }
    };

    // Check visibility initially
    handleScroll();

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (viewCount === 0 && isVisible) {
      setViewCount((prev) => prev + 1);
    }
  }, [isVisible, viewCount]);

  return { elemRef, isVisible, viewCount };
};
