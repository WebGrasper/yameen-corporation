"use client";

import { FunctionComponent, useState } from "react";
import styles from "./left-navigation-menu.module.css";
import Image from "next/image";
import SearchDropdown from "../search-dropdown/search-dropdown";
import CategoryDrodown from "../../containers/category-dropdown/category-dropdown";

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

const LeftNavigationMenu: FunctionComponent<{ categories: Category[] }> = ({
  categories,
}) => {

    const [isShowLeftMenu, setIsShowLeftMenu] = useState<boolean>(false);

    const handleLeftMenu = () =>{
        setIsShowLeftMenu(!isShowLeftMenu);
    }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.sideMenuContainer}>
          <Image src={"/menu.png"} alt="menu icon" width={25} height={25} onClick={handleLeftMenu}/>
          <SearchDropdown />
        </div>
        <CategoryDrodown categories={categories} isShowLeftMenu={isShowLeftMenu} handleLeftMenu={handleLeftMenu} />
      </div>
    </>
  );
};

export default LeftNavigationMenu;
