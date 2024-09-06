import { FunctionComponent } from "react";
import styles from "./navbar.module.css";
import Logo from "../../containers/logo/logo";
import LeftNavigationMenu from "../../containers/left-navigation-menu/left-navigation-menu";
import RightNavigationMenu from "@/containers/right-navigation-menu/right-navigation-menu";

const fetchData = async () => {
  let categories = [
    {
      categoryID: "1",
      name: "Metal Arts",
      subCategories: [
        {
          subCategoryID: "1",
          name: "Black Metal Wall Art",
          categoryID: "1",
        },
        {
          subCategoryID: "2",
          name: "Outdoor Metal Wall Art",
          categoryID: "1",
        },
        {
          subCategoryID: "3",
          name: "Large Metal Wall Art",
          categoryID: "1",
        },
        {
          subCategoryID: "4",
          name: "Abstract Metal Wall Art",
          categoryID: "1",
        },
        {
          subCategoryID: "5",
          name: "Coastal Metal Wall Art",
          categoryID: "1",
        },
        { subCategoryID: "6", name: "Metal Wall Art", categoryID: "1" },
        {
          subCategoryID: "7",
          name: "Abstract Metal Tree Wall Art",
          categoryID: "1",
        },
      ],
    },
    {
      categoryID: "2",
      name: "Home Decor",
      subCategories: [
        { subCategoryID: "8", name: "Baskets", categoryID: "2" },
        { subCategoryID: "9", name: "Vases", categoryID: "2" },
        { subCategoryID: "10", name: "Wall Hangings", categoryID: "2" },
      ],
    },
  ];

  return categories;
};

/* Navbar component.*/
const Navbar: FunctionComponent = async () => {
  let categories = await fetchData();

  return (
    <nav className={styles.root}>
      <div className={styles.navbar}>
        <div className={styles.leftNavigationMenu}>
          <LeftNavigationMenu categories={categories} />
        </div>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.rightNavigationMenu}>
          <RightNavigationMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
