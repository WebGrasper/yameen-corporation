"use client";

import { FunctionComponent, useState, useEffect, useRef } from "react";
import styles from "./heading-4.module.css";
import { Frank_Ruhl_Libre } from "next/font/google";
import { useVisibility } from "@/hooks/visibility"; // Import the custom hook

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const Heading4: FunctionComponent<{ value: String; animate: boolean, dark: boolean }> = ({
  value,
  animate,
  dark
}) => {
  const { elemRef, viewCount } = useVisibility();

  return (
    <div className={`${styles.root}`} ref={elemRef}>
      <h4
        className={`${animate ? styles.animatedHeading4 : styles.heading4}  ${
          animate && viewCount === 1 ? styles.animation : ""
        }
        ${dark ? styles.dark : styles.light}
        ${frankRuhlLibre.className}`}
      >
        {value}
      </h4>
    </div>
  );
};

export default Heading4;
