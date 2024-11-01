import { FunctionComponent } from "react";
import styles from "./action-button.module.css";

const ActionButton: FunctionComponent<{ value: String; transparent: boolean }> = ({
  value,
  transparent
}) => {
  return (
    <div className={`${transparent ? styles.transparent : styles.fill}`}>
      RS. {value} - ADD TO CART
    </div>
  );
};

export default ActionButton;
