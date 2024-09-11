"use client";

import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "./usp-section.module.css";
import USP from "@/containers/usp/usp";

const USPSection: FunctionComponent = () => {
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  useEffect(() => {
    slideImage();
  }, [currentIndex]);

  const slideImage = () => {
    if (slidesContainerRef.current) {
      const slidesArray = Array.from(slidesContainerRef.current.children);

      slidesArray.forEach((slide, index) => {
        const slideElement = slide as HTMLElement;
        // Translate based on the current counter value
        slideElement.style.transform = `translateX(${
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

  const handleTouchEnd = async() => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;

    if (distance > 40 && currentIndex < (slidesContainerRef.current?.children.length || 1) - 1) {
      setCurrentIndex((prev) => prev + 1);
    }

    if (distance < -40 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
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
