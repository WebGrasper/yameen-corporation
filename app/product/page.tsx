import ImageSlider from "@/containers/image-slider/image-slider";
import styles from "./page.module.css";
import Heading6 from "@/containers/heading-6/heading-6";
import ProductInfoTable from "@/containers/product-info-table/product-info-table";
import Para3 from "@/containers/para-3/para-3";
import SizeDropDownMenu from "@/containers/size-drop-down-menu/size-drop-down-menu";
import QuantityAdjuster from "@/containers/quantity-adjuster/quantity-adjuster";
import RoutingButton from "@/containers/routing-button/routing-button";
import Para2 from "@/containers/para-2/para-2";
import Separator from "@/containers/separator/separator";

export default function Product() {

  const sizes = ["3 x 3", "5 x 5", "6 x 6", "10 x 10"];

  return (
    <main className={styles.root}>
      <div className={styles.main}>
        <div className={styles.productGrid}>
          <div className={styles.sliderContainer}><ImageSlider /></div>
          <div className={styles.infoContainer}>
            <Heading6 value={"Large Abstract Metal Wall Art"} animate={false} dark={true} />
            <ProductInfoTable />
            <div className={styles.sizeContainer}>
              <Para3 value={"Sizes."} animate={false} showIcon={false} dark={true} bold={true} />
              <SizeDropDownMenu sizes={sizes} />
            </div>
            <div className={styles.quantityContainer}>
              <QuantityAdjuster />
            </div>
            <div className={styles.cartButtonContainer}>
              <RoutingButton prefix={"rs."} value={'4,200.00'} suffix={"- Add to cart"} route={'#'} transparent={false} size={"md"} />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.infoHeadingContainer}>
              <Para2 animate={false} dark={true} showIcon={false} value={"INFO."}/>
            </div>
            <div className={styles.separatorContainer}>
              <Separator />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
