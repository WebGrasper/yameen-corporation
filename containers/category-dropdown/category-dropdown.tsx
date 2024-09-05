"use client";

import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { Abril_Fatface } from "next/font/google";
import styles from "./category-dropdown.module.css";
import Image from "next/image";

const AbrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
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

const DropDownMenu: FunctionComponent<{ categories: Category[] }> = ({
  categories,
}) => {
  const [categoryHover, setCategoryHover] = useState<String | null>(null);

  const handleCategoryHover = (categoryID: String | null) => {
    setCategoryHover(categoryID !== null ? categoryID : null);
  };

  return (
    <>
      {categories.map((category: Category) => (
        <li
          key={category.categoryID as string}
          onMouseEnter={() => handleCategoryHover(category.categoryID)}
          onMouseLeave={() => handleCategoryHover(null)}
          className={styles.links}
        >
          <div className={styles.dropDownLink}>
            <div>{category.name}</div>
            <Image
              className={`${styles.primary_menu_icon} ${
                categoryHover === category.categoryID ? styles.rotate : ""
              }`}
              src={"/down-arrow.png"}
              alt="down arrow icon"
              width={18}
              height={20}
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
                className={`${AbrilFatface.className} ${styles.subCategoryLink}`}
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
    </>
  );
};

export default DropDownMenu;
