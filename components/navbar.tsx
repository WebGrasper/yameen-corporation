"use client";

import { FunctionComponent, useState } from "react";
import styles from "@/styles/navbar.module.css";
import Logo from "./logo";
import Link from "next/link";
import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AbrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

type Inputs = {
  search: string;
};

const schema = yup
  .object()
  .shape({
    search: yup.string().required("Write something to search product!"),
  })
  .required();

const Navbar: FunctionComponent = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isSearchActive, setSearchActive] = useState<boolean>(false);

  const toggleSearchPage = () => {
    setSearchActive(!isSearchActive);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };

  return (
    <nav className={styles.root}>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <Logo />
        </div>
        <div className={styles.container}>
          <ul>
            <li
              onMouseEnter={() => setIsMenuVisible(true)}
              onMouseLeave={() => setIsMenuVisible(false)}
            >
              <div className={styles.dropDownLink}>
                <div>Collections</div>
                <Image
                  className={`${styles.icon} ${
                    isMenuVisible ? styles.rotate : ""
                  }`}
                  src={"/down-arrow.png"}
                  alt="down arrow icon"
                  width={18}
                  height={20}
                />
              </div>
              <ul
                className={`${styles.megaDropDownMenu} ${
                  isMenuVisible ? styles.show : ""
                }`}
              >
                <li className={AbrilFatface.className}>Black Metal Wall Art</li>
                <li className={AbrilFatface.className}>
                  Outdoor Metal Wall Art
                </li>
                <li className={AbrilFatface.className}>Large Metal Wall Art</li>
                <li className={AbrilFatface.className}>
                  Abstract Metal Wall Art
                </li>
                <li className={AbrilFatface.className}>
                  Coastal Metal Wall Art
                </li>
                <li className={AbrilFatface.className}>Metal Wall Art</li>
                <li className={AbrilFatface.className}>
                  Abstract Metal Tree Wall Art
                </li>
              </ul>
            </li>
            <li>
              <Link href={"#"} passHref>
                About us
              </Link>
            </li>
            <li>
              <Link href={"#"} passHref>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.container}>
          <Link href={"#"} passHref>
            <Image
              className={`${styles.icon} `}
              src={"/user.png"}
              alt="user icon"
              width={25}
              height={25}
            />
          </Link>
          <div className={styles.searchIcon}>
            <Image
              className={`${styles.icon} `}
              src={"/search.svg"}
              alt="search icon"
              width={25}
              height={25}
              onClick={toggleSearchPage}
            />
            <div
              className={`${styles.searchPage} ${
                isSearchActive ? styles.active : ""
              }`}
            >
              <div className={styles.searchMain}>
                <Image
                  src={"/close.png"}
                  alt="close button"
                  width={50}
                  height={50}
                  className={styles.searchCloseButton}
                  onClick={toggleSearchPage}
                />
                <div className={styles.formContainer}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className={`${AbrilFatface.className}`}
                      type="search"
                      {...register("search")}
                      placeholder="Start search..."
                    />
                    <button type="submit">
                      <Image
                        className={`${styles.icon} `}
                        src={"/search-light-gold.svg"}
                        alt="search icon"
                        width={35}
                        height={35}
                      />
                    </button>
                  </form>
                  {<p className={styles.error}>{errors.search?.message}</p>}
                </div>
              </div>
            </div>
          </div>
          <Link href={"#"} passHref>
            <Image
              className={`${styles.icon} `}
              src={"/cart.png"}
              alt="cart icon"
              width={22}
              height={22}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
