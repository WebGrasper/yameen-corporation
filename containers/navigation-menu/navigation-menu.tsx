"use client";

import { FunctionComponent, useState, useEffect } from "react";
import styles from "./navigation-menu.module.css";
import Logo from "@/containers/logo/logo";
import LeftNavigationMenu from "@/containers/left-navigation-menu/left-navigation-menu";
import RightNavigationMenu from "@/containers/right-navigation-menu/right-navigation-menu";
import { usePathname } from "next/navigation";

interface Category {
  _id: string;
  name: string;
  subCategories: SubCategory[];
}

interface SubCategory {
  _id: string;
  name: string;
  categoryID: string;
}

const NavigationMenu: FunctionComponent<{ categories: Category[] }> = ({
  categories,
}) => {
  const [isOffset, setOffset] = useState<boolean>(false);
  const [navbarHover, setNavbarHover] = useState<boolean>(false);
  const [notAtHomePage, setNotAtHomePage] = useState<boolean>(false);
  const pathname = usePathname();

  // Check initial scroll position on component mount
  useEffect(() => {
    if (window.scrollY >= 1) {
      setOffset(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1) setOffset(true);
      else setOffset(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  useEffect(()=>{
    if(pathname !== '/')
      setNotAtHomePage(true)
  },[]);



  const handleNavbarHover = (value: boolean) => {
    setNavbarHover(value);
  };

  return (
    <nav
      className={`${styles.root} ${(isOffset || notAtHomePage) ? styles.fill : ""} ${notAtHomePage ? styles.sticky : ""}`}
      onMouseEnter={() => handleNavbarHover(true)}
      onMouseLeave={() => handleNavbarHover(false)}
    >
      <div className={styles.navbar}>
        <div className={styles.leftNavigationMenu}>
          <LeftNavigationMenu
            categories={categories}
            isOffset={isOffset}
            navbarHover={navbarHover}
            notAtHomePage={notAtHomePage}
          />
        </div>
        <div className={styles.logoContainer}>
          <Logo isOffset={isOffset} navbarHover={navbarHover} notAtHomePage={notAtHomePage} />
        </div>
        <div className={styles.rightNavigationMenu}>
          <RightNavigationMenu isOffset={isOffset} navbarHover={navbarHover} notAtHomePage={notAtHomePage}/>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
