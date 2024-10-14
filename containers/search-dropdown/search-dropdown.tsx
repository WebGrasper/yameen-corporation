"use client";

import { FunctionComponent, useState } from "react";
import styles from "./search-dropdown.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInputField from "@/containers/text-input-field/text-input-field";


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

const SearchDropdown: FunctionComponent<{
  isOffset: boolean;
  navbarHover: boolean;
}> = ({ isOffset, navbarHover }) => {
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
        src={`${
          isOffset || navbarHover ? "/search-dark.svg" : "/search-light.png"
        }`}
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
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <TextInputField
                placeholder={"Start search..."}
                iconSrc={"/search-light.png"}
                showButton={true} // Show submit button
                register={register} // Pass register function
                name={"search"}
                error={errors.search?.message} // Pass error message
                cursiveFonts={true}
                size={"large"}
                iconWidth={40}
                iconHeight={40}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
