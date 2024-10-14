"use client";

import { FunctionComponent } from "react";
import styles from "./anchor.module.css";
import { useVisibility } from "@/hooks/visibility"; // Import the custom hook
import Link from "next/link";

const Anchor: FunctionComponent<{
  value: String;
  animate: boolean;
  showIcon: boolean;
  dark: boolean;
  route: string;
}> = ({ value, animate, showIcon, dark, route }) => {
  const { elemRef, viewCount } = useVisibility();

  return (
    <Link className={`${styles.root}`} ref={elemRef} href={route} passHref>
      <div
        className={`${
          animate ? styles.animatedAnchorContainer : styles.anchorContainer
        }  ${animate && viewCount === 1 ? styles.animation : ""} 
      ${dark ? styles.dark : styles.light}`}
      >
        {showIcon && (
          <img src="/left.png" alt="left icon" className={styles.icon} />
        )}
        <p>{value}</p>
      </div>
    </Link>
  );
};

export default Anchor;
