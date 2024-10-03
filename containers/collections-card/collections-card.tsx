"use client";

import { FunctionComponent, useEffect } from "react";
import styles from "./collections-card.module.css";
import { Frank_Ruhl_Libre } from "next/font/google";
import { useVisibility } from "@/hooks/visibility"; // Import the custom hook
import Link from "next/link";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const CollectionsCard: FunctionComponent<{ animate: boolean }> = ({
  animate,
}) => {
  const { elemRef, viewCount } = useVisibility();

  return (
    <div
      className={`${animate ? styles.animatedRoot : styles.root}  ${
        animate && viewCount === 1 ? styles.animation : ""
      } `}
      ref={elemRef}
    >
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/right-arrow.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Center Tables
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/right-arrow.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Console Tables
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/right-arrow.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Garden Decor
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/right-arrow.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Baskets
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/right-arrow.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Lanterns
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/right-arrow.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Wall Decor
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CollectionsCard;
