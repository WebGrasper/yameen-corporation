import { FunctionComponent } from "react";
import styles from "./text-input-field.module.css";
import Image from "next/image";
import { Frank_Ruhl_Libre } from "next/font/google";


const frankRuhlLibre = Frank_Ruhl_Libre({
    subsets: ["latin"],
    weight: ["800"],
  });

type TextInputFieldProps = {
  placeholder: string;
  iconSrc?: string; // Icon source is now optional
  showButton: boolean; // Control button visibility
  register: any; // Register function from react-hook-form
  name: string; // Input name for react-hook-form
  error?: string; // Error message
  cursiveFonts: boolean; // Toggle for font style
  size?: "small" | "medium" | "large"; // Dynamic size for the input field
  iconWidth?: number; // Optional prop for dynamic icon width
  iconHeight?: number; // Optional prop for dynamic icon height
};

const TextInputField: FunctionComponent<TextInputFieldProps> = ({
  placeholder,
  iconSrc,
  showButton,
  register,
  name,
  error,
  cursiveFonts,
  size = "large", // Default input field size
  iconWidth = 35, // Default icon width
  iconHeight = 35, // Default icon height
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.textInputField}>
        <input
          type="search"
          placeholder={placeholder}
          {...register(name)} // Register the input field
          className={`${styles.input} ${styles[size]} ${cursiveFonts ? frankRuhlLibre.className : ""}`}
        />
        {showButton && iconSrc && (
          <button type="submit">
            <Image
              className={styles.icon}
              src={iconSrc}
              alt="submit icon"
              width={iconWidth}
              height={iconHeight}
            />
          </button>
        )}
      </div>
      {<p className={`${styles.error} ${styles[size]} ${error ? styles.show : ""}`}>{error}</p>}{" "}
    </div>
  );
};

export default TextInputField;
