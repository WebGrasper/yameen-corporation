"use client";

import { FunctionComponent, useState } from "react";
import styles from "./search-dropdown.module.css";
import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AbrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

/* Defining the inputs that form consists.*/
type Inputs = {
  search: string;
};

/* Schema validation for search form.*/
const schema = yup
  .object()
  .shape({
    search: yup.string().required("Write something to search product!"),
  })
  .required();

const SearchDropdown: FunctionComponent = () => {
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
    <div className={styles.searchContainer}>
      <Image
        className={`${styles.secondary_menu_icon} `}
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
            className={`${styles.search_closing_button} ${styles.secondary_menu_icon}`}
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
                  className={`${styles.secondary_menu_icon} `}
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
  );
};

export default SearchDropdown;
