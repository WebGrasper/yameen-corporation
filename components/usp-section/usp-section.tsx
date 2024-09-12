"use client";

import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "./usp-section.module.css";
import USP from "@/containers/usp/usp";

const USPSection: FunctionComponent = () => {
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalSlides = 2;  

  // Use useEffect to access the ref after the component mounts
  useEffect(() => {
    if (slidesContainerRef.current) {
      let slidesArray = Array.from(slidesContainerRef.current.children);

      slidesArray.forEach((slide, index) => {
        // Typecasting to HTMLElement to access `style` properties
        let slideElement = slide as HTMLElement;

        slideElement.style.left = `${index * 100}%`;
      });
    }
  }, []);

  // Slide to the current image when the index changes
  useEffect(() => {
    slideImage();
  }, [currentIndex]);

  const slideImage = () => {
    if (slidesContainerRef.current) {
      const slidesArray = Array.from(slidesContainerRef.current.children);

      slidesArray.forEach((slide, index) => {
        const slideElement = slide as HTMLElement;
        // Translate based on the current counter value
        slideElement.style.transform = `translateX(-${
          currentIndex * 100
        }%)`;
      });
    }
  };

  const handleTouchStart = (e:React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e:React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;

    
    if (distance > 40 && currentIndex < totalSlides) {
      // Swiping left (to see the next slide)
      setCurrentIndex((prev) => Math.min(prev + 1, totalSlides));
    }

    if (distance < -40 && currentIndex > 0) {
      // Swiping right (to see the previous slide)
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    setTouchStart(null);
    setTouchEnd(null);
  };
 

  return (
    <div className={styles.root}>
      <div
        className={styles.main}
        ref={slidesContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <USP
          src={"/good.png"}
          alt={"good icon"}
          heading={"Exceptional Quality"}
          description={`We encapsulates the attention to detail, creativity, and focus on provenance and quality.`}
        />
        <USP
          src={"/transport.png"}
          alt={"transport icon"}
          heading={"Across India Shipping"}
          description={`No hidden costs, no surprises; we ship to your doorstep!`}
        />
        <USP
          src={"/return.png"}
          alt={"return icon"}
          heading={"14-Day Return Policy"}
          description={`Not satisfied with your purchase? Return it within 14 days from a order recieved.`}
        />
      </div>
    </div>
  );
};

export default USPSection;
