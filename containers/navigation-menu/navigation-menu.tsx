"use client";

import { FunctionComponent, useState, useEffect } from "react";
import styles from "./navigation-menu.module.css";
import Logo from "@/containers/logo/logo";
import LeftNavigationMenu from "@/containers/left-navigation-menu/left-navigation-menu";
import RightNavigationMenu from "@/containers/right-navigation-menu/right-navigation-menu";

interface Category {
  _id: string;
  name: string;
  subcategories: SubCategory[];
}

interface SubCategory {
  _id: string;
  name: string;
  parentCategory: string;
}

const NavigationMenu: FunctionComponent<{ categories: Category[] }> = ({
  categories,
}) => {
  const [isOffset, setOffset] = useState<boolean>(false);
  const [navbarHover, setNavbarHover] = useState<boolean>(false);

  useEffect(() => {

    const handleScroll = () =>{
      if (window.scrollY >= 1) setOffset(true);
      else setOffset(false);
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    console.log(navbarHover);
  }, [navbarHover]);

  const handleNavbarHover = (value: boolean) => {
    setNavbarHover(value);
  };

  return (
    <nav
      className={`${styles.root} ${isOffset ? styles.fill : ""}`}
      onMouseEnter={() => handleNavbarHover(true)}
      onMouseLeave={() => handleNavbarHover(false)}
    >
      <div className={styles.navbar}>
        <div className={styles.leftNavigationMenu}>
          <LeftNavigationMenu
            categories={categories}
            isOffset={isOffset}
            navbarHover={navbarHover}
          />
        </div>
        <div className={styles.logoContainer}>
          <Logo isOffset={isOffset} navbarHover={navbarHover} />
        </div>
        <div className={styles.rightNavigationMenu}>
          <RightNavigationMenu isOffset={isOffset} navbarHover={navbarHover} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
