
import ImageSlider from "@/containers/image-slider/image-slider";
import styles from "./page.module.css";

export default function Product() {
  return (
    <main className={styles.root}>
      <div className={styles.main}>
        <div className={styles.productGrid}>
          <div className={styles.sliderContainer}><ImageSlider /></div>
          <div className={styles.productInfoContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius autem recusandae quibusdam non laboriosam ipsa vel blanditiis nisi eligendi obcaecati, commodi praesentium repellendus voluptatum, porro mollitia tempore ad reprehenderit.</div>
          <div className={styles.productDescriptionContainer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium distinctio non esse a iure culpa. Animi rerum eveniet id, nihil cumque nam placeat. Neque nulla porro cumque saepe vero natus.</div>
        </div>
      </div>
    </main>
  );
}
