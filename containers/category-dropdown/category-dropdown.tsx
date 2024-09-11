"use client";

import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { Frank_Ruhl_Libre } from "next/font/google";
import styles from "./category-dropdown.module.css";
import Image from "next/image";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

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

const CategoryDrodown: FunctionComponent<{
  categories: Category[],
  isShowLeftMenu: boolean,
  handleLeftMenu: () => void,
  isOffset: boolean,
  navbarHover: boolean
}> = ({ categories, isShowLeftMenu, handleLeftMenu, isOffset, navbarHover }) => {
  const [categoryHover, setCategoryHover] = useState<String | null>(null);
  const [screenSize, setScreenSize] = useState<number | null>(null);  // Initialize with null

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);

      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Provide a default value (1121) if screenSize is null
  const isSmallScreen: boolean = (screenSize ?? 1121) < 1121;

  const handleCategoryHover = (
    categoryID: String | null,
    eventType: String
  ) => {
    if (eventType === "click") {
      setCategoryHover((prev) => (prev === categoryID ? null : categoryID));
    } else if (eventType === "hover") {
      setCategoryHover(categoryID);
    }
  };

  return (
    <ul className={`${styles.root} ${isShowLeftMenu ? styles.active : ""}`}>
      <li className={styles.closing_icon} onClick={handleLeftMenu}>
        <Image
          src={"/close-dark.png"}
          alt="close button"
          width={40}
          height={40}
        />
      </li>
      {categories?.map((category: Category) => (
        <li
          key={category._id as string}
          {...(isSmallScreen
            ? {
                onClick: () =>
                  handleCategoryHover(category._id, "click"),
              }
            : {
                onMouseEnter: () =>
                  handleCategoryHover(category._id, "hover"),
                onMouseLeave: () => handleCategoryHover(null, "hover"),
              })}
          className={`${styles.links} ${(isOffset || navbarHover) ? styles.active : ""}`}
        >
          <div className={styles.dropDownLink}>
            <div>{category.name}</div>
            <Image
              className={`${styles.primary_menu_icon} ${
                categoryHover === category._id ? styles.rotate : ""
              }`}
              src={
                ((screenSize ?? 1121) < 1121 || (isOffset || navbarHover))
                  ? '/down-arrow-dark.png'
                  : '/down-arrow-light.png'
              }
              alt="down arrow icon"
              width={`15`}
              height={`15`}
            />
          </div>
          <ul
            className={`${styles.dropDownMenu} ${
              categoryHover === category._id ? styles.show : ""
            }`}
          >
            {category.subcategories.map((subcategory) => (
              <li
                key={subcategory._id as string}
                className={`${frankRuhlLibre.className} ${styles.subCategoryLink}`}
              >
                {subcategory.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
      <li className={`${styles.links} ${(isOffset || navbarHover) ? styles.active : ""}`}>
        <Link href={"#"} passHref>
          About us
        </Link>
      </li>
      <li className={`${styles.links} ${(isOffset || navbarHover) ? styles.active : ""}`}>
        <Link href={"#"} passHref>
          Contact us
        </Link>
      </li>
    </ul>
  );
};

export default CategoryDrodown;
