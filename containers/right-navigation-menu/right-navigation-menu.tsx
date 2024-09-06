"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./right-navigation-menu.module.css";
import SearchDropdown from "../search-dropdown/search-dropdown";

const RightNavigationMenu: FunctionComponent = () => {
  return (
    <div className={styles.root}>
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
  );
};

export default RightNavigationMenu;
