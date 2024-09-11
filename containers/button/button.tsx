import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./button.module.css";

const SectionButton: FunctionComponent<{ value: String; link: String, transparent: boolean }> = ({
  value,
  link,
  transparent
}) => {
  return (
    <Link href={`${link}`} className={`${transparent ? styles.transparent : styles.fill}`}>
      {value}
    </Link>
  );
};

export default SectionButton;
