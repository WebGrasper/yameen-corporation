"use client";

import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "./usp-section.module.css";
import USP from "@/containers/usp/usp";

const USPSection: FunctionComponent = () => {
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);
  const [startX, setStartX] = useState(0); // to track touchstart X position

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

  const slideImage = () => {
    if (slidesContainerRef.current) {
      const slidesArray = Array.from(slidesContainerRef.current.children);

      slidesArray.forEach((slide, index) => {
        const slideElement = slide as HTMLElement;
        // Translate based on the current counter value
        slideElement.style.transform = `translateX(${
          (index - counter) * 100
        }%)`;
      });
    }
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  // Handle touch end to detect swipe direction
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX; // Calculate the difference between touchstart and touchend

    // If swipe is greater than a threshold (50px), we consider it a swipe
    if (deltaX > 50) {
      handleNext(); // Swipe left -> next slide
    } else if (deltaX < -50) {
      handlePrev(); // Swipe right -> previous slide
    }
  };

  // Increment the counter to show the next slide
  const handleNext = () => {
    if (slidesContainerRef.current) {
      if (counter < slidesContainerRef.current.children.length - 1) {
        setCounter((prevCounter) => prevCounter + 1);
        slideImage();
      }
    }
  };

  // Decrement the counter to show the previous slide
  const handlePrev = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
      slideImage();
    }
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.main}
        ref={slidesContainerRef}
        onTouchStart={handleTouchStart}
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
