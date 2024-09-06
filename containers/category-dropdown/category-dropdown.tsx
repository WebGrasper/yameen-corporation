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
  categoryID: string;
  name: string;
  subCategories: SubCategory[];
}

interface SubCategory {
  subCategoryID: string;
  name: string;
  categoryID: string;
}

const CategoryDrodown: FunctionComponent<{ categories: Category[], isShowLeftMenu: boolean, handleLeftMenu: ()=> void }> = ({
  categories,
  isShowLeftMenu,
  handleLeftMenu
}) => {
  const [categoryHover, setCategoryHover] = useState<String | null>(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen: boolean = screenSize < 1121;

  const handleCategoryHover = (categoryID: String | null, eventType: String) => {
    if(eventType === "click"){
      setCategoryHover(prev => prev === categoryID ? null : categoryID);
    } else if(eventType === "hover"){
      setCategoryHover(categoryID);
    }
  };

  return (
    <ul className={`${styles.root} ${isShowLeftMenu ? styles.active : ""}`}>
      <li className={styles.closing_icon} onClick={handleLeftMenu}>
        <Image src={"/close-dark.png"} alt="close button" width={40} height={40} />
      </li>
      {categories.map((category: Category) => (
        <li
          key={category.categoryID as string}
          {...(
            isSmallScreen ? 
            {
              onClick: ()=> handleCategoryHover(category.categoryID, "click")
            }
            :
            {
              onMouseEnter: () => handleCategoryHover(category.categoryID, "hover"),
              onMouseLeave: () => handleCategoryHover(null, "hover")
            })}
          className={styles.links}
        >
          <div className={styles.dropDownLink}>
            <div>{category.name}</div>
            <Image
              className={`${styles.primary_menu_icon} ${
                categoryHover === category.categoryID ? styles.rotate : ""
              }`}
              src={`/down-arrow-dark.png`}
              alt="down arrow icon"
              width={`${screenSize < 1121 ? 15 : 18}`}
              height={`${screenSize < 1121 ? 15 : 18}`}
            />
          </div>
          <ul
            className={`${styles.dropDownMenu} ${
              categoryHover === category.categoryID ? styles.show : ""
            }`}
          >
            {category.subCategories.map((subcategory) => (
              <li
                key={subcategory.subCategoryID as string}
                className={`${frankRuhlLibre.className} ${styles.subCategoryLink}`}
              >
                {subcategory.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
      <li className={styles.links}>
        <Link href={"#"} passHref>
          About us
        </Link>
      </li>
      <li className={styles.links}>
        <Link href={"#"} passHref>
          Contact us
        </Link>
      </li>
    </ul>
  );
};

export default CategoryDrodown;
