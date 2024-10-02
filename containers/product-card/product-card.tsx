"use client";

import { FunctionComponent, useEffect } from "react";
import styles from "./product-card.module.css";
import { Frank_Ruhl_Libre } from "next/font/google";
import { useVisibility } from "@/hooks/visibility"; // Import the custom hook

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const ProductCard: FunctionComponent<{ animate: boolean }> = ({ animate }) => {
  const { elemRef, viewCount } = useVisibility();

  return (
    <div
      className={`${animate ? styles.animatedRoot : styles.root}  ${
        animate && viewCount === 1 ? styles.animation : ""
      } `}
      ref={elemRef}
    >
      <div className={styles.card}>
        <div className={styles.images}>
          <img
            src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
            alt="img1"
          />
        </div>
        <div className={styles.content}>
          <h4 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Pure Brass Traditional Kerala Oil Lamp villaku - 16 Inches
          </h4>
          <div className={styles.price}>
            <ins className={styles.discountedPrice}>$49.99</ins>
            <del className={styles.mainPrice}>$59.99</del>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.images}>
          <img
            src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
            alt="img1"
          />
        </div>
        <div className={styles.content}>
          <h4 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Pure Brass Traditional Kerala Oil Lamp villaku - 16 Inches
          </h4>
          <div className={styles.price}>
            <ins className={styles.discountedPrice}>$49.99</ins>
            <del className={styles.mainPrice}>$59.99</del>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.images}>
          <img
            src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
            alt="img1"
          />
        </div>
        <div className={styles.content}>
          <h4 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Pure Brass Traditional Kerala Oil Lamp villaku - 16 Inches
          </h4>
          <div className={styles.price}>
            <ins className={styles.discountedPrice}>$49.99</ins>
            <del className={styles.mainPrice}>$59.99</del>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.images}>
          <img
            src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
            alt="img1"
          />
        </div>
        <div className={styles.content}>
          <h4 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Pure Brass Traditional Kerala Oil Lamp villaku - 16 Inches
          </h4>
          <div className={styles.price}>
            <ins className={styles.discountedPrice}>$49.99</ins>
            <del className={styles.mainPrice}>$59.99</del>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.images}>
          <img
            src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
            alt="img1"
          />
        </div>
        <div className={styles.content}>
          <h4 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Pure Brass Traditional Kerala Oil Lamp villaku - 16 Inches
          </h4>
          <div className={styles.price}>
            <ins className={styles.discountedPrice}>$49.99</ins>
            <del className={styles.mainPrice}>$59.99</del>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.images}>
          <img
            src="https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035"
            alt="img1"
          />
        </div>
        <div className={styles.content}>
          <h4 className={`${styles.title} ${frankRuhlLibre.className}`}>
            Pure Brass Traditional Kerala Oil Lamp villaku - 16 Inches
          </h4>
          <div className={styles.price}>
            <ins className={styles.discountedPrice}>$49.99</ins>
            <del className={styles.mainPrice}>$59.99</del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
