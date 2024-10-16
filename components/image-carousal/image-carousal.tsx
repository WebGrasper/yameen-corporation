"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./image-carousal.module.css";

export default function ImageCarousal() {
  const [isZoomClicked, setZoomClicked] = useState<boolean>(false);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);

  // Set the initial width of the image container based on the image's width
  useEffect(() => {
    if (imgRef.current) {
      setImageWidth(imgRef.current.offsetWidth);
    }
  }, []);

  // Calculate center position for translate3d
  const getTranslateValue = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect(); // Get the image's current position
      const centerX = window.innerWidth / 2; // Center of the viewport (X-axis)
      const centerY = window.innerHeight / 2; // Center of the viewport (Y-axis)
      const translateX = (centerX - (rect.left + rect.width / 2));
      const translateY = centerY - (rect.top + rect.height / 2) - (window.innerHeight - rect.height) / 2; // Adjust translateY
      return { translateX, translateY }; // Return both translate values
    }
    return { translateX: 0, translateY: 0 }; // Default values if image ref is not available
  };

  const { translateX, translateY } = isZoomClicked ? getTranslateValue() : { translateX: 0, translateY: 0 };

  useEffect(()=>{
    console.log(translateX);
  },[translateX])

  const zoomImage = () => {
    setZoomClicked(true);
  };

  const unZoomImage = () => {
    setZoomClicked(false);
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageCarousal}
        style={{
          width: isZoomClicked ? "100%" : `${imageWidth}px`,
          height: isZoomClicked ? "100vh" : "",
          zIndex: isZoomClicked ? 100 : "auto",
          backgroundColor: isZoomClicked ? 'black' : 'transparent'
        }}
      >
        <img
          className={`${styles.closeIcon} ${
            isZoomClicked ? styles.activeCloseIcon : ""
          }`}
          src={"/close-round.png"}
          alt="close round icon"
          onClick={unZoomImage}
        />
        <div className={`${styles.imageContainer}`}>
          <img
            className={`${styles.plusIcon} ${isZoomClicked ? styles.unactivePlusIcon : ""}`}
            src={"/plus.png"}
            alt=""
            loading="lazy"
            onClick={zoomImage}
          />
          <img
            ref={imgRef}
            className={`${styles.image} ${isZoomClicked ? styles.activeFullImage : ""}`}
            style={{transform: isZoomClicked
                ? `translate3d(${translateX}px, 0, 0)` // Use translate3d
                : "unset"}}
            src={
              "https://visualalloy.com/cdn/shop/files/large-black-outdoor-metal-wall-art.webp?v=1725098034&width=1200"
            }
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
