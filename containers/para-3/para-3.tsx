"use client";

import { FunctionComponent } from "react";
import styles from "./para-3.module.css";
import { useVisibility } from "@/hooks/visibility"; // Import the custom hook

const Para3: FunctionComponent<{
  value: String,
  animate: boolean,
  showIcon: boolean,
  dark: boolean,
  bold: boolean
}> = ({ value, animate, showIcon, dark, bold }) => {
  const { elemRef, viewCount } = useVisibility();

  return (
    <div
      className={`${animate ? styles.animatedRoot : styles.root}  ${
        animate && viewCount === 1 ? styles.animation : ""
      } 
      ${dark ? styles.dark : styles.light}`}
      ref={elemRef}
    >
      {showIcon && <img src="/left.png" alt="left icon" className={styles.icon} />}
      <p className={`${styles.para1} ${bold ? styles.activeBold : ''}`}>{value}</p>
    </div>
  );
};

export default Para3;
