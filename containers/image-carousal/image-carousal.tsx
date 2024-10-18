"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./image-carousal.module.css";

export default function ImageCarousal() {
  const [zoomedImageIndex, setZoomedImageIndex] = useState<number | null>(null); // Track zoomed image index

  const [translateX, setTranslateX] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, [window.scrollY]);

  // useEffect(()=>{
  //   console.log(scrollPosition);
  // },[scrollPosition])

  const images = [
    "https://ik.imagekit.io/ancorporation/Test%20resources/brass-camel.webp?updatedAt=1728314126048",
    "https://ik.imagekit.io/ancorporation/Test%20resources/brass-bowl.webp?updatedAt=1728314125738",
    "https://ik.imagekit.io/ancorporation/Test%20resources/brass-tortoise-urli.webp?updatedAt=1728314125956",
    // Add more image URLs as needed
  ];

  const imgRefs = useRef<(HTMLImageElement | null)[]>([]); // Store refs for all images

  // Create refs dynamically for each image
  useEffect(() => {
    imgRefs.current = images.map(() => null); // Initialize the array with null values
  }, [images.length]);

  // Calculate center position for translate3d
  const setTranslateValue = (index: number) => {
    const imgRef = imgRefs.current[index]; // Get the ref of the clicked image
    if (imgRef) {
      const rect = imgRef.getBoundingClientRect(); // Get the image's current position
      console.log("window-width:", window.innerWidth, "image-width:", rect.width, "left:", rect.left);
      const translateX = (window.innerWidth - rect.width) / 2;
      const translateY = (window.innerHeight - rect.height) / 2; // Adjust translateY
      setTranslateX(translateX);
      setTranslateY(translateY);
      return;
    }
    setTranslateX(0);
    setTranslateY(0);
  };

  useEffect(() => {
    if (zoomedImageIndex !== null) {
      setTranslateValue(zoomedImageIndex); // Pass the index of the zoomed image
    }
  }, [zoomedImageIndex]);

  const zoomImage = (index: number) => {
    setZoomedImageIndex(index);
  };

  const handleClose = () => {
    unZoomImage();
    // Restore the window scroll position
    window.scrollTo(0, scrollPosition);
  };

  const unZoomImage = () => {
    setZoomedImageIndex(null);
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageCarousal}
        style={{
          width: zoomedImageIndex !== null ? "100%" : `unset`,
          height: zoomedImageIndex !== null ? "100vh" : "",
          overflow: "hidden",
          position: zoomedImageIndex !== null ? "fixed" : "relative",
          top: zoomedImageIndex !== null ? 0 : undefined,
          left: zoomedImageIndex !== null ? 0 : undefined,
          zIndex: zoomedImageIndex !== null ? 100 : "auto",
          display: zoomedImageIndex !== null ? "block" : "grid",
          backgroundColor:
            zoomedImageIndex !== null ? 'rgba(252, 247, 230, 1)' : 'transparent',
        }}
      >
        {zoomedImageIndex !== null && (
          <img
            className={`${styles.closeIcon} ${styles.activeCloseIcon}`}
            src={"/close-dark-2.png"}
            alt="close icon"
            onClick={handleClose}
          />
        )}

        {images.map((src, index) => (
          <div key={index} className={`${styles.imageContainer}`} style={{
            display: zoomedImageIndex === null || zoomedImageIndex === index ? "block" : "none",
          }}>
            <img
              className={`${styles.plusIcon} ${zoomedImageIndex === index ? styles.unactivePlusIcon : ""
                }`}
              src={"/magnifier.png"}
              alt=""
              loading="lazy"
              onClick={() => zoomImage(index)}
            />
            <img
              ref={(el) => {
                imgRefs.current[index] = el; // Correct ref assignment without returning anything
              }}
              className={`${styles.image} ${zoomedImageIndex === index ? styles.activeFullImage : ""
                }`}
              style={{
                transform:
                  zoomedImageIndex === index
                    ? `translate3d(${translateX}px, 0, 0)` // Use translate3d
                    : "unset",
              }}
              src={src}
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
