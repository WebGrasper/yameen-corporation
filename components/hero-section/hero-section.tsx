"use client";

import { FunctionComponent } from "react";
import styles from "./hero-section.module.css";
import { Frank_Ruhl_Libre, Poppins } from "next/font/google";
import RoutingButton from "@/containers/routing-button/routing-button";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const poppins = Poppins({
    subsets:['latin'],
    weight:["400"]
})

const HeroSection: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          autoPlay
          muted
          crossOrigin="anonymous"
          loop
        >
          <source
            src="https://ik.imagekit.io/ancorporation/Home%20page%20resources/hero-video.mp4?updatedAt=1725701983251"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.contentContainer}>
        <div className={`${styles.content}`}>
          <h2 className={`${frankRuhlLibre.className} ${styles.heading}`}>
            <span>Art of</span>
            <span> Brass Handicafts</span>
          </h2>
          <p className={`${poppins.className} ${styles.description}`}>
            Bring life long memories to your home.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <RoutingButton prefix={undefined} value={'contact us'} suffix={undefined} route={'#'} transparent={true} size={"sm"}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
