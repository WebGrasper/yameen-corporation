"use client";

import { FunctionComponent, useState, useEffect, useRef } from "react";
import styles from "./heading-2.module.css";
import { Frank_Ruhl_Libre } from "next/font/google";
import { useVisibility } from "@/hooks/visibility"; // Import the custom hook

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const Heading2: FunctionComponent<{ value: String; animate: boolean, dark: boolean }> = ({
  value,
  animate,
  dark
}) => {
  const { elemRef, viewCount } = useVisibility();

  return (
    <div
      className={`${animate ? styles.animatedRoot : styles.root}  ${
        animate && viewCount === 1 ? styles.animation : ""
      }
        ${dark ? styles.dark : styles.light}`}
      ref={elemRef}
    >
      <h2 className={`${styles.heading2} ${frankRuhlLibre.className}`}>
        {value}
      </h2>
    </div>
  );
};

export default Heading2;
