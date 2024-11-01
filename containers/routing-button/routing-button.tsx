"use client"

import { FunctionComponent } from "react";
import styles from "./routing-button.module.css";
import { useRouter } from "next/navigation";

const RoutingButton: FunctionComponent<{ value: String; route: string; transparent: boolean; prefix: string | undefined; suffix: string | undefined; size: "sm" | "md" }> = ({
  value,
  route,
  transparent,
  prefix,
  suffix,
  size
}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div onClick={handleClick} className={`${transparent ? styles.transparent : styles.fill} ${styles[size]}`}>
    {prefix} {' '} {value} {' '} {suffix}
    </div>
  );
};

export default RoutingButton;
