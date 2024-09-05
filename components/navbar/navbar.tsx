import { FunctionComponent } from "react";
import styles from "./navbar.module.css";
import Logo from "../../containers/logo/logo";
import Link from "next/link";
import Image from "next/image";
import CategoryDrodown from "../../containers/category-dropdown/category-dropdown";
import SearchDropdown from "../../containers/search-dropdown/search-dropdown";

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
        <div className={styles.container}>
          <Logo />
        </div>
        <div className={styles.primary_menu_container}>
          <ul className={styles.navigationMenu}>
            <CategoryDrodown categories={categories} />
          </ul>
        </div>
        <div className={styles.secondary_menu_container}>
          <Link href={"#"} passHref>
            <Image
              className={`${styles.secondary_menu_icon} `}
              src={"/user.png"}
              alt="user icon"
              width={25}
              height={25}
            />
          </Link>
          <SearchDropdown />
          <Link href={"#"} passHref>
            <Image
              className={`${styles.secondary_menu_icon} `}
              src={"/cart.png"}
              alt="cart icon"
              width={23}
              height={23}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
