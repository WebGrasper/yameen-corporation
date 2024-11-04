"use client";

import { FunctionComponent, useEffect, useState } from "react";
import styles from "./product-slider.module.css";
import { Frank_Ruhl_Libre } from "next/font/google";
import { useVisibility } from "@/hooks/visibility";
import { ProductCard } from "../product-card/product-card";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const ProductSlider: FunctionComponent<{ animate: boolean }> = ({ animate }) => {
  const { elemRef, viewCount } = useVisibility();
  const images = [
    {
      imageURL: 'https://ik.imagekit.io/ancorporation/Test%20resources/brass-camel.webp?updatedAt=1728314126048',
      alt: 'Brass Camel'
    },
    {
      imageURL: 'https://ik.imagekit.io/ancorporation/Test%20resources/brass-elephant.webp?updatedAt=1728314126140',
      alt: 'Brass Elephant'
    },
    {
      imageURL: 'https://ik.imagekit.io/ancorporation/Test%20resources/brass-square-urli.webp?updatedAt=1728314126005',
      alt: ''
    },
    {
      imageURL: 'https://ik.imagekit.io/ancorporation/Test%20resources/oil-lamp.webp?updatedAt=1727003259035',
      alt: 'Lamp oil'
    },
    {
      imageURL: 'https://ik.imagekit.io/ancorporation/Test%20resources/brass-tortoise-urli.webp?updatedAt=1728314125956',
      alt: 'Brass Tortoise'
    },
    {
      imageURL: 'https://ik.imagekit.io/ancorporation/Test%20resources/brass-bowl.webp?updatedAt=1728314125738',
      alt: 'Brass three phase tiger'
    }];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(3);
  const totalSlides = 6;


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 481)
        setSlidesToShow(1);
      else if (window.innerWidth <= 1025)
        setSlidesToShow(2);
      else
        setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust the index to slide left
  const slideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Adjust the index to slide right
  const slideRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - slidesToShow));
  };


  return (
    <div className={`${animate ? styles.animatedRoot : styles.root}  ${animate && viewCount === 1 ? styles.animation : ""} `} ref={elemRef}>
      <img src="/left-arrow-filled-dark.png" alt="left button" className={`${styles.leftButton} ${currentIndex <= 0 ? styles.disableButton : ''}`} onClick={slideLeft} />
      <div className={styles.slider} style={{ transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)` }}>
        {images.map((image, index) => (
          <ProductCard imageURL={image.imageURL} alt={image.alt} index={index} />
        ))}
      </div>
      <img src="/right-arrow-filled-dark.png" alt="right button" className={`${styles.rightButton} ${currentIndex >= totalSlides - slidesToShow ? styles.disableButton : ''}`} onClick={slideRight} />
    </div >
  );
};

export default ProductSlider;
