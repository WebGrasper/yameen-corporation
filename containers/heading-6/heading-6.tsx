"use client";

import { FunctionComponent, useState, useEffect, useRef } from "react";
import styles from "./heading-6.module.css";
import { Frank_Ruhl_Libre } from "next/font/google";
import { useVisibility } from "@/hooks/visibility"; // Import the custom hook

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const Heading6: FunctionComponent<{ value: String; animate: boolean, dark: boolean }> = ({
  value,
  animate,
  dark
}) => {
  const { elemRef, viewCount } = useVisibility();

  return (
    <div className={`${styles.root}`} ref={elemRef}>
      <h5
        className={`${animate ? styles.animatedHeading5 : styles.heading5}  ${
          animate && viewCount === 1 ? styles.animation : ""
        }
        ${dark ? styles.dark : styles.light}
        ${frankRuhlLibre.className}`}
      >
        {value}
      </h5>
    </div>
  );
};

export default Heading6;
