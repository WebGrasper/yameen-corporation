"use client"

import { FunctionComponent, useEffect, useState } from "react";
import styles from "./logo.module.css";
import { Frank_Ruhl_Libre } from "next/font/google";
import Link from "next/link";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const Logo: FunctionComponent<{isOffset: boolean, navbarHover: boolean, notAtHomePage: boolean}> = ({isOffset, navbarHover, notAtHomePage}) => {

  return (
    <Link href={'/'} className={styles.root}>
      <div className={`${styles.brandName} ${frankRuhlLibre.className} ${(isOffset || navbarHover || notAtHomePage) ? styles.active : ""} `}>
        <p>Yameen</p>
        <p>Corporation</p>
      </div>
    </Link>
  );
};

export default Logo;
