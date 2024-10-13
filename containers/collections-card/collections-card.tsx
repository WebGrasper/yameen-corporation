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
          src="https://ik.imagekit.io/ancorporation/Test%20resources/brass-bowl.webp?updatedAt=1728314125738"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/cursor.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title}`}>
            Center Tables
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/brass-tortoise-urli.webp?updatedAt=1728314125956"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/cursor.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title}`}>
            Console Tables
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/brass-square-urli.webp?updatedAt=1728314126005"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/cursor.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title}`}>
            Garden Decor
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/brass-elephant.webp?updatedAt=1728314126140"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/cursor.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title}`}>
            Baskets
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/brass-camel.webp?updatedAt=1728314126048"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/cursor.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title}`}>
            Lanterns
          </h3>
        </div>
      </Link>
      <Link href={'#'} className={styles.card}>
        <img
          src="https://ik.imagekit.io/ancorporation/Test%20resources/brass-ganpati-urli.webp?updatedAt=1728314126175"
          alt="img1"
          className={styles.image}
        />
        <div className={styles.content}>
          <img
            src="/cursor.png"
            alt="right arrow icon"
            className={styles.icon}
          />
          <h3 className={`${styles.title}`}>
            Wall Decor
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CollectionsCard;
