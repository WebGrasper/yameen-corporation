import ImageCarousal from "@/containers/image-carousal/image-carousal";
import styles from "./page.module.css";

export default function Product() {
  return (
    <main className={styles.root}>
      <div className={styles.main}>
        <ImageCarousal />
      </div>
    </main>
  );
}
