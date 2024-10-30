
import ImageSlider from "@/containers/image-slider/image-slider";
import styles from "./page.module.css";
import Heading6 from "@/containers/heading-6/heading-6";
import Separator from "@/containers/separator/separator";

export default function Product() {
  return (
    <main className={styles.root}>
      <div className={styles.main}>
        <div className={styles.productGrid}>
          <div className={styles.sliderContainer}><ImageSlider /></div>
          <div className={styles.productInfoContainer}> 
            <Heading6 value={"Large Abstract Metal Wall Art"} animate={false} dark={true}/>
            {/* <Separator /> */}
          </div>
          <div className={styles.productDescriptionContainer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium distinctio non esse a iure culpa. Animi rerum eveniet id, nihil cumque nam placeat. Neque nulla porro cumque saepe vero natus.</div>
        </div>
      </div>
    </main>
  );
}
